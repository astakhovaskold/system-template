import {Tag, TagProps} from 'antd';
import clsx from 'clsx';
import {memo, useMemo} from 'react';

import {ORDER_STATUS, OrderListDTO} from '@/app/modules/orders/types';

type Props = Pick<OrderListDTO, 'status'>;

const Status = memo<Props>(({status}): JSX.Element | null => {
    const color = useMemo<TagProps['color']>(() => {
        switch (status) {
            case ORDER_STATUS.CLOSED:
                return 'var(--color-closed)';

            case ORDER_STATUS.APPROVED:
                return 'success';

            case ORDER_STATUS.PENDING:
                return 'warning';

            default:
                return 'default';
        }
    }, [status]);

    return (
        <Tag
            className={clsx('whitespace-nowrap capitalize', {
                'border-1 !border-closed': status === ORDER_STATUS.CLOSED,
            })}
            color={color}
        >
            {status?.toString().toLowerCase()}
        </Tag>
    );
});

export default Status;
