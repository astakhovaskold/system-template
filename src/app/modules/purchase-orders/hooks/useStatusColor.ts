import {TagProps} from 'antd';
import {useMemo} from 'react';

import {Status} from '@/app/components/StatusFilter/types';
import {PO_STATUS} from '@/app/modules/purchase-orders/types';

const byDefault = '#1677FF';

function useStatusColor(status: Status): string {
    const color = useMemo<TagProps['color']>(() => {
        switch (status) {
            case PO_STATUS.CLOSED:
                return 'default';

            case PO_STATUS.APPROVED:
                return 'success';

            case PO_STATUS.REJECTED:
                return 'error';

            case PO_STATUS.PENDING:
                return 'warning';

            default:
                return byDefault;
        }
    }, [status]);

    return color ?? byDefault;
}

export default useStatusColor;
