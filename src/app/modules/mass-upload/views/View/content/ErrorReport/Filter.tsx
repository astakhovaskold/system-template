import {memo} from 'react';

import SearchField from '@/app/components/forms/fields/SearchField';
import APIMock from '@/libs/APIMock';

const Filter = memo((): JSX.Element | null => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-9"></div>
            <div className="col-span-3">
                <SearchField url={APIMock.massUploads()} />
            </div>
        </div>
    );
});

export default Filter;
