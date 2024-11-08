import {ColumnsType} from 'antd/es/table';
import {memo} from 'react';
import {Link} from 'react-router-dom';

import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import {PurchaseOrderListDTO} from '@/app/modules/purchase-orders/types';
import Status from '@/app/modules/purchase-orders/views/Status';
import APIMock from '@/libs/APIMock';

const columns: ColumnsType<PurchaseOrderListDTO> = [
    {
        dataIndex: 'id',
        title: 'PO #',
        render: (_, {id}) => <Link to={`/purchase-orders/${id}`}>{id}</Link>,
    },
    {
        dataIndex: 'totalOrderCost',
        title: 'Total Order Cost',
    },
    {
        dataIndex: 'raisedByName',
        title: 'Raised By',
    },
    {
        dataIndex: 'createdBy',
        title: 'Created',
    },
    {
        dataIndex: 'supplierName',
        title: 'Supplier Name',
    },
    {
        key: 'status',
        title: 'Status',
        render: (_, {status, statusName}) => <Status status={status} statusName={statusName} />,
    },
    {
        dataIndex: 'orderItems',
        title: 'Order Items',
    },
    {
        dataIndex: 'supplierCountry',
        title: 'Supplier Country',
    },
];

const Pagination = memo((): JSX.Element | null => {
    return <PaginationTable<PurchaseOrderListDTO> url={APIMock.purchaseOrders()} columns={columns} />;
});

export default Pagination;
