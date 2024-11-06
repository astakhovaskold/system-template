import {CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, FlagOutlined} from '@ant-design/icons';
import {memo} from 'react';

import StatusFilter from '@/app/components/StatusFilter/StatusFilter';
import {PO_STATUS} from '@/app/modules/purchase-orders/types';
import API from '@/libs/API';

interface FilterProps {}

const Filter = memo<FilterProps>((): JSX.Element | null => {
    return (
        <div>
            <StatusFilter<PO_STATUS>
                url={API.purchaseOrders()}
                total={5}
                options={[
                    {
                        title: 'Pending',
                        value: PO_STATUS.PENDING,
                        icon: <ClockCircleOutlined />,
                        amount: 25,
                    },
                    {
                        title: 'Approved',
                        value: PO_STATUS.APPROVED,
                        icon: <CheckCircleOutlined />,
                        amount: 21,
                    },
                    {
                        title: 'Rejected',
                        value: PO_STATUS.REJECTED,
                        icon: <CloseCircleOutlined />,
                        amount: 21,
                    },
                    {
                        title: 'Closed',
                        value: PO_STATUS.CLOSED,
                        icon: <FlagOutlined />,
                        amount: 21,
                    },
                ]}
            />
        </div>
    );
});

export default Filter;
