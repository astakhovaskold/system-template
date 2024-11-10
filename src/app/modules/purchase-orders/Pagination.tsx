import {memo} from 'react';

import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import columns from '@/app/modules/purchase-orders/columns';
import {PurchaseOrderListDTO} from '@/app/modules/purchase-orders/types';
import APIMock from '@/libs/APIMock';

const Pagination = memo((): JSX.Element | null => {
    return <PaginationTable<PurchaseOrderListDTO> url={APIMock.purchaseOrders()} columns={columns} />;
});

export default Pagination;
