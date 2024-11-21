import {Tag} from 'antd';
import clsx from 'clsx';
import {memo} from 'react';

import useStatusColor from '@/app/modules/mass-upload/hooks/useStatusColor';
import {MASS_UPLOAD_STATUS, UploadDTO} from '@/app/modules/mass-upload/types';

type Props = Pick<UploadDTO, 'status'>;

const Status = memo<Props>(({status}): JSX.Element | null => {
    const color = useStatusColor(status);

    return (
        <Tag
            className={clsx('whitespace-nowrap capitalize', {
                'border-1 !border-closed': status === MASS_UPLOAD_STATUS.ERROR,
            })}
            color={color}
        >
            {status?.toString().toLowerCase()}
        </Tag>
    );
});

export default Status;
