import {
    closestCenter,
    DndContext,
    DragEndEvent,
    DragOverEvent,
    DragOverlay,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {restrictToHorizontalAxis} from '@dnd-kit/modifiers';
import {arrayMove, horizontalListSortingStrategy, SortableContext} from '@dnd-kit/sortable';
import {ReactNode, useCallback, useMemo, useState} from 'react';

import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import {PaginationTableProps} from '@/app/components/PaginationTable/types';
import TableBodyCell from '@/app/components/PaginationTableDND/components/TableBodyCell';
import TableHeaderCell from '@/app/components/PaginationTableDND/components/TableHeaderCell';
import Context from '@/app/components/PaginationTableDND/Context';
import {DragNDropCtx} from '@/app/components/PaginationTableDND/types';
import {sortColumnsByArray} from '@/app/components/PaginationTableDND/utils';
import useColumnsPagination from '@/hooks/pagination/useColumnsPagination';
import {Common} from '@/typings/common';

type PaginationTableDNDProps<T extends Common> = PaginationTableProps<T>;

const paginationTableProps = {components: {header: {cell: TableHeaderCell}, body: {cell: TableBodyCell}}};

function PaginationTableDND<T extends Common>({url, columns, ...rest}: PaginationTableDNDProps<T>): JSX.Element | null {
    const [dragIndex, setDragIndex] = useState<DragNDropCtx>({active: -1, over: -1});

    const [columnsPagination, setColumnsPagination] = useColumnsPagination(url);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                // https://docs.dndkit.com/api-documentation/sensors/pointer#activation-constraints
                distance: 1,
            },
        }),
    );

    const columnsExtended = useMemo(
        () =>
            columns.map(column => ({
                ...column,
                onHeaderCell: () => ({id: `${column.key}`}),
                onCell: () => ({id: `${column.key}`}),
            })),
        [columns],
    );

    const sortable = useMemo(() => columns.map(i => i.key as string), [columns]);

    const dragOverlay = useMemo(
        () => columns[columns.findIndex(i => i.key === dragIndex.active)]?.title as ReactNode,
        [columns, dragIndex.active],
    );

    const onDragEnd = useCallback(
        ({active, over}: DragEndEvent) => {
            if (active.id !== over?.id) {
                const activeIndex = columnsPagination.findIndex(i => i.key === active?.id);
                const overIndex = columnsPagination.findIndex(i => i.key === over?.id);

                const moved = arrayMove(columnsPagination, activeIndex, overIndex).map(({key, hidden}) => ({
                    key: key as string,
                    hidden,
                }));

                setColumnsPagination(moved);
            }

            setDragIndex({active: -1, over: -1});
        },
        [columnsPagination, setColumnsPagination],
    );

    const onDragOver = useCallback(
        ({active, over}: DragOverEvent) => {
            const activeIndex = columnsPagination.findIndex(i => i.key === active.id);
            const overIndex = columnsPagination.findIndex(i => i.key === over?.id);

            setDragIndex({
                active: active.id,
                over: over?.id,
                direction: overIndex > activeIndex ? 'right' : 'left',
            });
        },
        [columnsPagination],
    );

    const columnsSorted = useMemo(
        () =>
            sortColumnsByArray<T>(
                columnsExtended,
                columnsPagination.map(c => c.key),
            ),
        [columnsExtended, columnsPagination],
    );

    return (
        <DndContext
            sensors={sensors}
            modifiers={[restrictToHorizontalAxis]}
            onDragEnd={onDragEnd}
            onDragOver={onDragOver}
            collisionDetection={closestCenter}
        >
            <SortableContext items={sortable} strategy={horizontalListSortingStrategy}>
                <Context.Provider value={dragIndex}>
                    <PaginationTable<T>
                        {...rest}
                        url={url}
                        columns={columnsSorted}
                        tableProps={{...rest.tableProps, ...paginationTableProps}}
                    />
                </Context.Provider>

                <DragOverlay>
                    <th className="bg-gray p-4">{dragOverlay}</th>
                </DragOverlay>
            </SortableContext>
        </DndContext>
    );
}

export default PaginationTableDND;
