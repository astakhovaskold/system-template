import {TagProps} from 'antd';
import {useMemo} from 'react';

import {PO_STATUS} from '@/app/modules/purchase-orders/types';
import {Status} from '@/typings/common';

function useStatusColor(status: Status): string {
    const color = useMemo<Required<TagProps>['color']>(() => {
        switch (status) {
            case PO_STATUS.CLOSED:
                return 'default';

            case PO_STATUS.APPROVED:
                return 'success';

            case PO_STATUS.PENDING:
                return 'warning';

            default:
                return 'var(--color-processing)';
        }
    }, [status]);

    return color;
}

export default useStatusColor;
