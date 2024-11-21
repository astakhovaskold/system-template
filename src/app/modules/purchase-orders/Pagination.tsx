import {memo} from 'react';

import PaginationTableDND from '@/app/components/PaginationTableDND/PaginationTableDND';
import columns from '@/app/modules/purchase-orders/columns';
import API from '@/libs/API';

const Pagination = memo((): JSX.Element | null => {
    return <PaginationTableDND url={API.purchaseOrders()} columns={columns} />;
});

export default Pagination;
