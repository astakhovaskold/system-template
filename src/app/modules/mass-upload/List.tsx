import {memo} from 'react';

import PageContainer from '@/app/components/Layout/PageContainer';
import {FILTER} from '@/app/modules/mass-upload/features';
import Filter from '@/app/modules/mass-upload/Filter';
import Pagination from '@/app/modules/mass-upload/Pagination';

const List = memo((): JSX.Element | null => {
    return (
        <PageContainer title="Mass Upload" className="flex flex-col gap-y-4">
            {FILTER && <Filter />}

            <Pagination />
        </PageContainer>
    );
});

export default List;
