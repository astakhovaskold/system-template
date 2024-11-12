import {CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, FlagOutlined} from '@ant-design/icons';
import {memo} from 'react';

import StatusFilter from '@/app/components/StatusFilter/StatusFilter';
import {MASS_UPLOAD_STATUS} from '@/app/modules/mass-upload/types';
import API from '@/libs/API';

const Filter = memo((): JSX.Element | null => {
    return (
        <div>
            <StatusFilter<MASS_UPLOAD_STATUS>
                url={API.massUploads()}
                total={5}
                options={[
                    {
                        title: 'Pending',
                        value: MASS_UPLOAD_STATUS.PENDING,
                        icon: <ClockCircleOutlined />,
                        amount: 25,
                    },
                    {
                        title: 'Validated',
                        value: MASS_UPLOAD_STATUS.VALIDATED,
                        icon: <CheckCircleOutlined />,
                        amount: 21,
                    },
                    {
                        title: 'Rejected',
                        value: MASS_UPLOAD_STATUS.REJECTED,
                        icon: <CloseCircleOutlined />,
                        amount: 21,
                    },
                    {
                        title: 'Error',
                        value: MASS_UPLOAD_STATUS.ERROR,
                        icon: <FlagOutlined />,
                        amount: 21,
                    },
                ]}
            />
        </div>
    );
});

export default Filter;
