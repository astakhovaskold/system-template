import {Badge, BadgeProps} from 'antd';
import {memo, PropsWithChildren, useMemo} from 'react';

import {StatusFilterLabel} from '@/app/components/StatusFilter/types';
import {MASS_UPLOAD_STATUS} from '@/app/modules/mass-upload/types';
import {PO_STATUS} from '@/app/modules/purchase-orders/types';

const Label = memo<PropsWithChildren<StatusFilterLabel>>(({amount, status, children}): JSX.Element | null => {
    const color = useMemo<BadgeProps['color']>(() => {
        switch (status) {
            case PO_STATUS.CLOSED:
            case MASS_UPLOAD_STATUS.ERROR:
                return 'var(--color-closed)';

            case PO_STATUS.APPROVED:
            case MASS_UPLOAD_STATUS.VALIDATED:
                return 'var(--color-success)';

            case PO_STATUS.REJECTED:
            case MASS_UPLOAD_STATUS.REJECTED:
                return 'var(--color-error)';

            case PO_STATUS.PENDING:
            case MASS_UPLOAD_STATUS.PENDING:
                return 'var(--color-warning)';

            default:
                return 'var(--color-processing)';
        }
    }, [status]);

    return (
        <span className="inline-flex items-center gap-x-1">
            {children}
            <Badge count={amount} color={color} />
        </span>
    );
});

export default Label;
