import {memo} from 'react';

import Header from '@/app/modules/mass-upload/views/Header';

const List = memo((): JSX.Element | null => {
    return (
        <div className="flex flex-col gap-y-4">
            <Header />
        </div>
    );
});

export default List;
