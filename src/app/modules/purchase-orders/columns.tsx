import {ColumnsType} from 'antd/es/table';

import {Link} from 'react-router-dom';

import {PurchaseOrderListDTO} from '@/app/modules/purchase-orders/types';
import Status from '@/app/modules/purchase-orders/views/Status';

const columns: ColumnsType<PurchaseOrderListDTO> = [
    {
        key: 'id',
        dataIndex: 'id',
        title: 'PO #',
        render: (_, {id}) => <Link to={`/purchase-orders/${id}`}>{id}</Link>,
    },
    {
        key: 'totalOrderCost',
        dataIndex: 'totalOrderCost',
        title: 'Total Order Cost',
    },
    {
        key: 'raisedByName',
        dataIndex: 'raisedByName',
        title: 'Raised By',
    },
    {
        key: 'createdBy',
        dataIndex: 'createdBy',
        title: 'Created',
    },
    {
        key: 'supplierName',
        dataIndex: 'supplierName',
        title: 'Supplier Name',
    },
    {
        key: 'status',
        dataIndex: 'status',
        title: 'Status',
        render: (_, {status, statusName}) => <Status status={status} statusName={statusName} />,
    },
    {
        key: 'orderItems',
        dataIndex: 'orderItems',
        title: 'Order Items',
    },
    {
        key: 'supplierCountry',
        dataIndex: 'supplierCountry',
        title: 'Supplier Country',
    },
];

export default columns;
