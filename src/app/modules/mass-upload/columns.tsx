import {ColumnsType} from 'antd/es/table';

import {Link} from 'react-router-dom';

import DateView from '@/app/components/Presentation/DateView';
import {UploadDTO} from '@/app/modules/mass-upload/types';
import Status from '@/app/modules/mass-upload/views/Status';

const columns: ColumnsType<UploadDTO> = [
    {
        dataIndex: 'id',
        key: 'id',
        title: 'Upload Ref. #',
        render: (_, {id}) => <Link to={`/mass-upload/${id}`}>{id}</Link>,
    },
    {
        dataIndex: 'orderId',
        key: 'orderId',
        title: 'Order #',
        render: (_, {orderId}) => <Link to="/mass-upload">{orderId}</Link>,
    },
    {
        dataIndex: 'vendorOrderId',
        key: 'vendorOrderId',
        title: 'Vendor Order #',
    },
    {
        dataIndex: 'uploadType',
        key: 'uploadType',
        title: 'Upload Type',
    },
    {
        dataIndex: 'createdBy',
        key: 'createdBy',
        title: 'Created by',
    },

    {
        dataIndex: 'uploaded',
        key: 'uploaded',
        title: 'Uploaded',
        render: value => <DateView date={value} />,
    },
    {
        key: 'status',
        title: 'Status',
        render: (_, {status}) => <Status status={status} />,
    },
];

export default columns;
