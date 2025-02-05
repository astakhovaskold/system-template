import {TagProps} from 'antd';
import {useMemo} from 'react';

import {ORDER_STATUS} from '@/app/modules/orders/types';
import {Status} from '@/typings/common';

function useStatusColor(status: Status): string {
    const color = useMemo<Required<TagProps>['color']>(() => {
        switch (status) {
            case ORDER_STATUS.CLOSED:
                return 'default';

            case ORDER_STATUS.APPROVED:
                return 'success';

            case ORDER_STATUS.PENDING:
                return 'warning';

            default:
                return 'var(--color-processing)';
        }
    }, [status]);

    return color;
}

export default useStatusColor;
