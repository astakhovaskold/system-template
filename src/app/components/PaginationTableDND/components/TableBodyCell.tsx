import {useContext} from 'react';

import Context from '@/app/components/PaginationTableDND/Context';
import {BodyCellProps, DragNDropCtx} from '@/app/components/PaginationTableDND/types';
import {dragActiveStyle} from '@/app/components/PaginationTableDND/utils';

const TableBodyCell = (props: BodyCellProps) => {
    const dragState = useContext<DragNDropCtx>(Context);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <td {...props} style={{...props.style, ...dragActiveStyle(dragState, props.id)}} />;
};

export default TableBodyCell;
