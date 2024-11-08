import {memo} from 'react';

import PageContainer from '@/app/components/Layout/PageContainer';
import Filter from '@/app/modules/purchase-orders/Filter';
import Pagination from '@/app/modules/purchase-orders/Pagination';
import Header from '@/app/modules/purchase-orders/views/Header';

const List = memo((): JSX.Element | null => {
    return (
        <PageContainer className="flex flex-col gap-y-4" title="Purchase Orders">
            <Filter />
            <Header />
            <Pagination />
        </PageContainer>
    );
});

export default List;
