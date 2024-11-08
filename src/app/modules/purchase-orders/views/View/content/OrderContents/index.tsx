import {ColumnsType} from 'antd/es/table';
import {memo, useContext} from 'react';

import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import Context from '@/app/modules/purchase-orders/Context';
import {PurchaseOrderItemDTO} from '@/app/modules/purchase-orders/types';
import Filter from '@/app/modules/purchase-orders/views/View/content/OrderContents/Filter';
import APIMock from '@/libs/APIMock';

const columns: ColumnsType<PurchaseOrderItemDTO> = [
    {
        dataIndex: 'id',
        title: 'Item #',
    },
    {
        dataIndex: 'locationName',
        title: 'Location',
    },
    {
        dataIndex: 'quantity',
        title: 'Quantity',
    },
    {
        dataIndex: 'currency',
        title: 'Currency',
    },
    {
        dataIndex: 'estimatedInStockDate',
        title: 'Estimated in Stock Date',
    },
];

const OrderContents = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    return (
        <div className="flex flex-col gap-y-4">
            <Filter />
            <PaginationTable<PurchaseOrderItemDTO> url={APIMock.purchaseOrders(item.id)} columns={columns} />
        </div>
    );
});

export default OrderContents;
