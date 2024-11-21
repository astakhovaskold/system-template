import {ColumnsType, ColumnType} from 'antd/es/table';
import {CSSProperties} from 'react';

import {DragNDropCtx} from '@/app/components/PaginationTableDND/types';

export const dragActiveStyle = (dragState: DragNDropCtx, id: string) => {
    const {active, over, direction} = dragState;

    // drag active style
    let style: CSSProperties = {};

    if (active && active === id) {
        style = {backgroundColor: 'gray', opacity: 0.5};
    }
    // dragover dashed style
    else if (over && id === over && active !== over) {
        style = direction === 'right' ? {borderRight: '1px dashed gray'} : {borderLeft: '1px dashed gray'};
    }

    return style;
};

export function sortColumnsByArray<T>(items: ColumnsType<T>, ordered: Array<string>): ColumnsType<T> {
    if (!ordered || ordered.length === 0) return items;

    const orderMap = new Map<string, number>();
    ordered.forEach((dataIndex, index) => orderMap.set(dataIndex, index));

    return items.sort((a: ColumnType<T>, b: ColumnType<T>) => {
        const indexA = orderMap.get(a.dataIndex as string) ?? Number.MAX_SAFE_INTEGER;
        const indexB = orderMap.get(b.dataIndex as string) ?? Number.MAX_SAFE_INTEGER;
        return indexA - indexB;
    });
}
