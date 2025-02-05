import {memo} from 'react';

import PageContainer from '@/app/components/Layout/PageContainer';
import {FILTER} from '@/app/components/PaginationTable/features';
import Filter from '@/app/modules/orders/Filter';
import Pagination from '@/app/modules/orders/Pagination';

const List = memo((): JSX.Element | null => {
    return (
        <PageContainer className="flex flex-col gap-y-4" title="Orders">
            {FILTER && <Filter />}

            <Pagination />
        </PageContainer>
    );
});

export default List;
