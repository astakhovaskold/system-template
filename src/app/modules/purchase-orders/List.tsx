import {memo} from 'react';

import PageContainer from '@/app/components/Layout/PageContainer';
import {FILTER} from '@/app/components/PaginationTable/features';
import Filter from '@/app/modules/purchase-orders/Filter';
import Pagination from '@/app/modules/purchase-orders/Pagination';

const List = memo((): JSX.Element | null => {
    return (
        <PageContainer className="flex flex-col gap-y-4" title="Purchase Orders">
            {FILTER && <Filter />}

            <Pagination />
        </PageContainer>
    );
});

export default List;
