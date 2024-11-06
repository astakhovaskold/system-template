import {
    CheckCircleOutlined,
    ClockCircleOutlined,
    CloseCircleOutlined,
    DeleteOutlined,
    DownloadOutlined,
    FlagOutlined,
} from '@ant-design/icons';
import {ReactNode, useMemo} from 'react';

import {Action, ActionTypes} from '@/app/components/PaginationTable/types';
import {PO_STATUS} from '@/app/modules/purchase-orders/types';

function useIcon(status: Action): ReactNode | undefined {
    const icon = useMemo<ReactNode>(() => {
        switch (status) {
            case PO_STATUS.CLOSED:
                return <FlagOutlined />;

            case PO_STATUS.APPROVED:
                return <CheckCircleOutlined />;

            case PO_STATUS.REJECTED:
                return <CloseCircleOutlined />;

            case PO_STATUS.PENDING:
                return <ClockCircleOutlined />;

            case ActionTypes.DELETE:
                return <DeleteOutlined />;

            case ActionTypes.DOWNLOAD:
                return <DownloadOutlined />;

            default:
                return undefined;
        }
    }, [status]);

    return icon;
}

export default useIcon;
