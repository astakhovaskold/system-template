import {ColumnsType} from 'antd/es/table';

import {Link} from 'react-router-dom';

import {OrderListDTO} from '@/app/modules/orders/types';
import Status from '@/app/modules/orders/views/Status';

const columns: ColumnsType<OrderListDTO> = [
    {
        dataIndex: 'id',
        key: 'id',
        title: '#',
        render: (_, {id}) => <Link to={`/orders/${id}`}>{id}</Link>,
    },
    {
        dataIndex: 'type',
        key: 'type',
        title: 'Order Type',
        hidden: true,
    },
    {
        key: 'status',
        dataIndex: 'status',
        title: 'Status',
        render: (_, {status}) => <Status status={status} />,
    },
    {
        dataIndex: 'cost',
        title: 'Cost',
    },
    {
        dataIndex: 'supplierName',
        key: 'supplierName',
        title: 'Supplier Name',
    },
    {
        dataIndex: 'supplierCode',
        key: 'supplierCode',
        title: 'Supplier Code',
        hidden: true,
    },
    {
        dataIndex: 'supplierSiteId',
        key: 'supplierSiteId',
        title: 'Supplier Site',
        hidden: true,
    },
    {
        dataIndex: 'discount',
        title: 'Discount %',
    },
];

export default columns;
