import {memo} from 'react';

import {useParams} from 'react-router-dom';

import PaginationTableDND from '@/app/components/PaginationTableDND/PaginationTableDND';
import {PurchaseOrderItemLocationListDTO} from '@/app/modules/purchase-orders/types';
import columns from '@/app/modules/purchase-orders/views/Item/content/LocationList/columns';
import API from '@/libs/API';

const OrderContents = memo((): JSX.Element | null => {
    const {id, itemId} = useParams();

    if (!itemId || !id) return null;

    return (
        <PaginationTableDND<PurchaseOrderItemLocationListDTO>
            url={API.purchaseOrders(Number(id), 'items', Number(itemId), 'locations')}
            columns={columns}
            showEdit={true}
        />
    );
});

export default OrderContents;
