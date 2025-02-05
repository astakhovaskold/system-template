import {memo} from 'react';

import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import columns from '@/app/modules/orders/columns';
import APIMock from '@/libs/APIMock';

const Pagination = memo((): JSX.Element | null => {
    return <PaginationTable url={APIMock.orders()} columns={columns} />;
});

export default Pagination;
