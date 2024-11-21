import {useSortable} from '@dnd-kit/sortable';
import {CSSProperties, FC, useContext, useMemo} from 'react';

import Context from '@/app/components/PaginationTableDND/Context';
import {HeaderCellProps} from '@/app/components/PaginationTableDND/types';
import {dragActiveStyle} from '@/app/components/PaginationTableDND/utils';

const TableHeaderCell: FC<HeaderCellProps> = props => {
    const dragState = useContext(Context);
    const {attributes, listeners, setNodeRef, isDragging} = useSortable({id: props.id});

    const style: CSSProperties = useMemo(
        () => ({
            ...props.style,
            cursor: 'move',
            ...(isDragging ? {position: 'relative', zIndex: 9999, userSelect: 'none'} : {}),
            ...dragActiveStyle(dragState, props.id),
        }),
        [dragState, isDragging, props.id, props.style],
    );

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <th {...props} ref={setNodeRef} style={style} {...attributes} {...listeners} />;
};

export default TableHeaderCell;
