import {useQuery} from '@tanstack/react-query';
import {Table, TableProps} from 'antd';
import {PaginationProps} from 'antd/es';
import {ColumnsType, ColumnType} from 'antd/es/table';
import {SortOrder} from 'antd/es/table/interface';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {PaginationResult, PaginationTableProps} from './types';

import ActionBar from '@/app/components/PaginationTable/ActionBar';
import ActionButton from '@/app/components/PaginationTable/ActionBar/ActionButton';
import {COLUMN_WIDTH} from '@/app/components/PaginationTable/settings';
import useColumnsPagination from '@/hooks/pagination/useColumnsPagination';
import useConfigPagination from '@/hooks/pagination/useConfigPagination';
import useFilterPagination from '@/hooks/pagination/useFilterPagination';
import useParamsPagination from '@/hooks/pagination/useParamsPagination';

import {Common} from '@/typings/common';

function isColumnType<T>(column: ColumnsType<T>[0]): column is ColumnType<T> {
    return 'dataIndex' in column;
}

const scroll: TableProps['scroll'] = {
    x: true,
};

function PaginationTable<T extends Common>({
    url,
    columns: baseColumns,
    uid = url,
    defaultSort,
    actions,
}: PaginationTableProps<T>) {
    const [params, setParams] = useParamsPagination(uid);
    const [filter] = useFilterPagination(uid);
    const {page, size, ordering} = params;

    const [columnsPagination, setColumnsPagination] = useColumnsPagination(url);
    const [, setConfig] = useConfigPagination(url, 'columns');

    const {data: list, isLoading: loading} = useQuery<PaginationResult<T>>({
        queryKey: [url, Object.assign(params, filter)],
    });

    const [selected, setSelected] = useState<Array<Common['id']>>([]);

    const defaultSortIsSet = useRef(false);
    useEffect(() => {
        defaultSortIsSet.current = false;
    }, [uid]);

    useEffect(() => {
        if (!ordering && defaultSort && !defaultSortIsSet.current) {
            setParams({ordering: defaultSort});
        }

        defaultSortIsSet.current = true;
    }, [defaultSort, setParams, ordering]);

    const onChangePagination: Required<TableProps<T>>['onChange'] = useCallback(
        ({current, pageSize}, _, sortProps) => {
            let nextOrdering: string | undefined = undefined;

            if (sortProps && !Array.isArray(sortProps)) {
                const {order, field, columnKey} = sortProps;
                if (order) {
                    nextOrdering = `${order === 'descend' ? '-' : ''}${
                        columnKey ? columnKey : Array.isArray(field) ? field.join('.') : field
                    }`;
                }
            }

            setParams({
                page: typeof current === 'number' ? current - 1 : undefined,
                size: pageSize,
                ordering: nextOrdering,
            });
        },
        [setParams],
    );

    const paginationConfig = useMemo<PaginationProps>(() => {
        return {
            current: page + 1,
            pageSize: size,
            total: list?.totalElements ?? 0,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '25', '50'],
            showQuickJumper: true,
            hideOnSinglePage: false,
            align: 'start',
        };
    }, [list, page, size]);

    const {sortOrder, sortName} = useMemo<{sortOrder: SortOrder | null; sortName: string | null}>(() => {
        return {
            sortOrder: ordering ? (ordering.charAt(0) === '-' ? 'descend' : 'ascend') : null,
            sortName: ordering ? ordering.replace('-', '') : null,
        };
    }, [ordering]);

    const columns = useMemo(
        () =>
            baseColumns.map(column => {
                const {key, hidden: hiddenByDefault} = column;

                const hidden = !(Array.isArray(columnsPagination) && columnsPagination.length > 0
                    ? columnsPagination.includes(key as string)
                    : !hiddenByDefault);

                if (sortName && column.sorter) {
                    if (key === sortName) {
                        return {
                            ...column,
                            hidden,
                            sortOrder,
                        };
                    } else if (isColumnType<T>(column)) {
                        const {dataIndex} = column;
                        if (dataIndex === sortName || (Array.isArray(dataIndex) && dataIndex.join('.') === sortName)) {
                            return {
                                ...column,
                                hidden,
                                sortOrder,
                            };
                        }
                    }
                }

                return {
                    ...column,
                    hidden,
                    sortOrder: null,
                };
            }),
        [baseColumns, sortName, columnsPagination, sortOrder],
    );

    useEffect(() => {
        if (!columnsPagination || (Array.isArray(columnsPagination) && columnsPagination.length === 0)) {
            const columnsByConfig = baseColumns.filter(({hidden}) => !hidden).map(({key}) => key as string);

            setColumnsPagination(columnsByConfig);
            setConfig(columnsByConfig);
        }
    }, [baseColumns, columns, columnsPagination, setColumnsPagination, setConfig]);

    const hasSelection = !!actions;
    const isActionBarOpen = selected && selected.length > 0;

    const rowSelection = useMemo<TableProps['rowSelection']>(
        () => ({
            type: 'checkbox',
            columnWidth: COLUMN_WIDTH.XS,
            onChange: keys => {
                setSelected(keys as Array<Common['id']>);
            },
            selectedRowKeys: selected,
        }),
        [selected],
    );

    return (
        <>
            <Table<T>
                rowKey="id"
                rowSelection={hasSelection ? rowSelection : undefined}
                columns={columns}
                dataSource={list?.content}
                onChange={onChangePagination}
                pagination={paginationConfig}
                showSorterTooltip={false}
                loading={loading}
                scroll={scroll}
            />

            {hasSelection && (
                <ActionBar open={isActionBarOpen} onClose={() => setSelected([])}>
                    {actions.map(action => (
                        <ActionButton
                            key={action}
                            listUrl={url}
                            // TODO: think about
                            urls={selected.map(id => url + `/${id}`)}
                            action={action}
                        >
                            {action}
                        </ActionButton>
                    ))}
                </ActionBar>
            )}
        </>
    );
}

export default PaginationTable;
