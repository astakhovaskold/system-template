import {SearchOutlined} from '@ant-design/icons';
import {Button, Checkbox, Dropdown, Form, Input, MenuProps} from 'antd';

import {CSSProperties, memo, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';

import Context from '@/app/components/PaginationTable/Context';
import {sortColumnsByArray} from '@/app/components/PaginationTableDND/utils';
import useColumnsPagination from '@/hooks/pagination/useColumnsPagination';
import useConfigPagination from '@/hooks/pagination/useConfigPagination';
import useClickAway from '@/hooks/useClickAway';

const {Item} = Form;

const scrollbarStyle: CSSProperties = {
    scrollbarColor: '#C2C9D4 transparent',
    scrollbarWidth: 'thin',
};

const EditTableButton = memo((): JSX.Element | null => {
    const {url, columns} = useContext(Context);

    const [search, setSearch] = useState('');

    const [columnsPagination, setColumnsPagination] = useColumnsPagination(url);
    const [config] = useConfigPagination(url, 'columns');

    const [open, setOpen] = useState(false);

    const [selected, setSelected] = useState<Array<string>>([]);
    const [reset, setReset] = useState(false);

    const dropdown = useRef<HTMLElement | null>(null);

    const onClose = () => {
        setSearch('');
        setReset(false);
        setOpen(false);
    };

    useClickAway(
        dropdown,
        () => {
            onClose();
        },
        ['click'],
        2000,
    );

    const items = useMemo(() => {
        const columnsToSort = reset ? config : columnsPagination;

        const sorted = sortColumnsByArray(
            columns,
            columnsToSort.map(({key}) => key),
        );

        if (!search) return columns;

        return sorted.filter(({key, title}) => {
            const regexp = new RegExp(search, 'gi');

            return typeof key === 'string' && typeof title === 'string' && search
                ? title.match(regexp) || key.match(regexp)
                : true;
        });
    }, [columns, columnsPagination, config, reset, search]);

    // const onCancel = useCallback(() => {
    //     setSelected(columnsKeys);
    //     setOpen(false);
    // }, [columnsKeys]);

    const columnsKeys = columnsPagination?.filter(c => !c.hidden)?.map(c => c.key);

    useEffect(() => {
        if (selected.length === 0) setSelected(columnsKeys);
    }, [columnsKeys, selected.length]);

    const onOk = useCallback(() => {
        const current = reset ? config : columnsPagination;

        const columnsCurrent = current.map(({key}) => ({
            key: key as string,
            hidden: !selected.includes(key),
        }));

        setColumnsPagination(columnsCurrent);
        onClose();
    }, [columnsPagination, config, reset, selected, setColumnsPagination]);

    const onReset = useCallback(() => {
        setSelected(config.filter(({hidden}) => !hidden).map(c => c.key));

        setReset(true);
    }, [config]);

    const menu = useMemo<MenuProps>(
        () => ({
            selectable: true,
            multiple: true,
            onSelect: values => setSelected(values.selectedKeys),
            onDeselect: values => setSelected(values.selectedKeys),
            selectedKeys: selected,
            items: [
                {
                    key: 'search',
                    disabled: true,
                    className: '!cursor-default',
                    label: (
                        <Form<{search: string}> onValuesChange={values => setSearch(values.search)}>
                            <Item name="search" noStyle>
                                <Input
                                    placeholder="Search"
                                    prefix={<SearchOutlined className="text-gray" />}
                                    className="w-[100%]"
                                    allowClear
                                />
                            </Item>
                        </Form>
                    ),
                },
                {type: 'divider'},
                {
                    type: 'group',
                    key: 'items',
                    className: 'max-h-[248px] overflow-y-scroll',
                    style: scrollbarStyle,
                    children: items.map(item => ({
                        type: 'item',
                        key: item.key as string,
                        label: item.title as string,
                        className: 'gap-x-2 flex-row-reverse !mb-2 last-of-type:!mb-0',
                        itemIcon: ({isSelected}) => <Checkbox checked={isSelected} />,
                    })),
                },
                {type: 'divider'},
                {
                    key: 'buttons',
                    disabled: true,
                    className: '!cursor-default',
                    label: (
                        <div className="w-full flex gap-x-2">
                            <Button onClick={onReset} className="text-gray" type="text" size="small" block>
                                Reset
                            </Button>
                            <Button onClick={onOk} size="small" type="primary" block>
                                OK
                            </Button>
                        </div>
                    ),
                },
            ],
        }),
        [items, onOk, onReset, selected],
    );

    return (
        <Dropdown
            getPopupContainer={node => (dropdown.current = node)}
            open={open}
            overlayClassName="min-w-[248px]"
            trigger={['click']}
            menu={menu}
        >
            <Button onClick={() => setOpen(true)}>Edit Table</Button>
        </Dropdown>
    );
});

export default EditTableButton;
