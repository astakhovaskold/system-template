import {Tag, TagProps} from 'antd';
import clsx from 'clsx';
import {memo, useMemo} from 'react';

import {PO_STATUS, PurchaseOrderListDTO} from '@/app/modules/purchase-orders/types';

type Props = Pick<PurchaseOrderListDTO, 'status' | 'statusName'>;

const Status = memo<Props>(({status, statusName}): JSX.Element | null => {
    const color = useMemo<TagProps['color']>(() => {
        switch (status) {
            case PO_STATUS.CLOSED:
                return 'var(--color-closed)';

            case PO_STATUS.APPROVED:
                return 'success';

            case PO_STATUS.REJECTED:
                return 'error';

            case PO_STATUS.PENDING:
                return 'warning';

            default:
                return 'default';
        }
    }, [status]);

    return (
        <Tag
            className={clsx('whitespace-nowrap capitalize', {
                'border-1 !border-closed': status === PO_STATUS.CLOSED,
            })}
            color={color}
        >
            {statusName}
        </Tag>
    );
});

export default Status;
