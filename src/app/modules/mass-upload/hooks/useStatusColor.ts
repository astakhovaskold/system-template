import {TagProps} from 'antd';
import {useMemo} from 'react';

import {MASS_UPLOAD_STATUS} from '@/app/modules/mass-upload/types';

function useStatusColor(status: MASS_UPLOAD_STATUS): string {
    const color = useMemo<Required<TagProps>['color']>(() => {
        switch (status) {
            case MASS_UPLOAD_STATUS.ERROR:
                return 'var(--color-closed)';

            case MASS_UPLOAD_STATUS.VALIDATED:
                return 'success';

            case MASS_UPLOAD_STATUS.REJECTED:
                return 'error';

            case MASS_UPLOAD_STATUS.PENDING:
                return 'warning';

            default:
                return 'var(--color-processing)';
        }
    }, [status]);

    return color;
}

export default useStatusColor;
