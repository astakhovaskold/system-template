import {memo} from 'react';

import Filter from '@/app/modules/mass-upload/Filter';
import Pagination from '@/app/modules/mass-upload/Pagination';
import Header from '@/app/modules/mass-upload/views/Header';

const List = memo((): JSX.Element | null => {
    return (
        <div className="flex flex-col gap-y-4">
            <Filter />
            <Header />
            <Pagination />
        </div>
    );
});

export default List;
