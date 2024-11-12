import {ColumnsType} from 'antd/es/table';
import {memo} from 'react';
import {Link} from 'react-router-dom';

import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import DateView from '@/app/components/Presentation/DateView';
import {UploadDTO} from '@/app/modules/mass-upload/types';
import Status from '@/app/modules/mass-upload/views/Status';
import APIMock from '@/libs/APIMock';

const columns: ColumnsType<UploadDTO> = [
    {
        dataIndex: 'uploadRefNo',
        key: 'uploadRefNo',
        title: 'Upload Ref. #',
        render: (_, {uploadRefNo}) => <Link to="/mass-upload">{uploadRefNo}</Link>,
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
        dataIndex: 'status',
        title: 'Status',
        render: (_, {status}) => <Status status={status} />,
    },
];

const Pagination = memo((): JSX.Element | null => {
    return <PaginationTable<UploadDTO> url={APIMock.massUploads()} columns={columns} />;
});

export default Pagination;
