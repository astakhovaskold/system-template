import {memo} from 'react';

import SearchField from '@/app/components/forms/fields/SearchField';
import MassUploadButton from '@/app/modules/mass-upload/FileUpload';
import API from '@/libs/API';

const Header = memo((): JSX.Element | null => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-9">
                <MassUploadButton />
            </div>
            <div className="col-span-3">
                <SearchField url={API.massUploads()} />
            </div>
        </div>
    );
});

export default Header;
