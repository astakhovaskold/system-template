import {Tag} from 'antd';
import {CSSProperties, memo} from 'react';

import useStatusColor from '@/app/modules/purchase-orders/hooks/useStatusColor';
import {PurchaseOrder} from '@/app/modules/purchase-orders/types';

type Props = Pick<PurchaseOrder.DTO, 'status' | 'statusName'>;

const textStyle: CSSProperties = {whiteSpace: 'nowrap'};

const Status = memo<Props>(({status, statusName}): JSX.Element | null => {
    const color = useStatusColor(status);

    return (
        <Tag style={textStyle} color={color}>
            {statusName}
        </Tag>
    );
});

export default Status;
