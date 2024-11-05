import {Badge} from 'antd';
import {memo, PropsWithChildren} from 'react';

import {StatusFilterLabel} from '@/app/components/StatusFilter/types';
import useStatusColor from '@/app/modules/purchase-orders/hooks/useStatusColor';

const Label = memo<PropsWithChildren<StatusFilterLabel>>(({amount, status, children}): JSX.Element | null => {
    const color = useStatusColor(status);

    return (
        <span className="inline-flex items-center gap-x-1">
            {children}
            <Badge count={amount} color={color} />
        </span>
    );
});

export default Label;
