import {CheckCircleOutlined, ClockCircleOutlined, FlagOutlined} from '@ant-design/icons';
import {memo} from 'react';

import StatusFilter from '@/app/components/StatusFilter/StatusFilter';
import {ORDER_STATUS} from '@/app/modules/orders/types';
import APIMock from '@/libs/APIMock';

const Filter = memo((): JSX.Element | null => {
    return (
        <div>
            <StatusFilter<ORDER_STATUS>
                url={APIMock.orders()}
                total={5}
                options={[
                    {
                        title: 'Pending',
                        value: ORDER_STATUS.PENDING,
                        icon: <ClockCircleOutlined />,
                        amount: 25,
                    },
                    {
                        title: 'Approved',
                        value: ORDER_STATUS.APPROVED,
                        icon: <CheckCircleOutlined />,
                        amount: 21,
                    },
                    {
                        title: 'Closed',
                        value: ORDER_STATUS.CLOSED,
                        icon: <FlagOutlined />,
                        amount: 21,
                    },
                ]}
            />
        </div>
    );
});

export default Filter;
