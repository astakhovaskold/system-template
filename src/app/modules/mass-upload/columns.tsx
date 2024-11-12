import {ColumnsType} from 'antd/es/table';

import {Link} from 'react-router-dom';

import DateView from '@/app/components/Presentation/DateView';
import {UploadDTO} from '@/app/modules/mass-upload/types';
import Status from '@/app/modules/mass-upload/views/Status';

const columns: ColumnsType<UploadDTO> = [
    {
        dataIndex: 'uploadRefNo',
        key: 'uploadRefNo',
        title: 'Upload Ref. #',
        render: (_, {uploadRefNo}) => <Link to={`/mass-upload/${uploadRefNo}`}>{uploadRefNo}</Link>,
    },
    {
        dataIndex: 'orderNo',
        key: 'orderNo',
        title: 'Order #',
        render: (_, {orderNo}) => <Link to="/mass-upload">{orderNo}</Link>,
    },
    {
        dataIndex: 'vendorOrderNo',
        key: 'vendorOrderNo',
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
