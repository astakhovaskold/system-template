import {memo} from 'react';

import PageContainer from '@/app/components/Layout/PageContainer';
import Filter from '@/app/modules/mass-upload/Filter';
import Pagination from '@/app/modules/mass-upload/Pagination';
import Header from '@/app/modules/mass-upload/views/Header';

const List = memo((): JSX.Element | null => {
    return (
        <PageContainer title="Mass Upload" className="flex flex-col gap-y-4">
            <Filter />
            <Header />
            <Pagination />
        </PageContainer>
    );
});

export default List;
