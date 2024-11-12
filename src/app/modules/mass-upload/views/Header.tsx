import {memo} from 'react';

import SearchField from '@/app/components/forms/fields/SearchField';
import EditTableButton from '@/app/components/PaginationTable/EditTableButton';
import columns from '@/app/modules/mass-upload/columns';
import MassUploadButton from '@/app/modules/mass-upload/FileUpload';
import {UploadDTO} from '@/app/modules/mass-upload/types';
import APIMock from '@/libs/APIMock';

const Header = memo((): JSX.Element | null => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-9 flex gap-2">
                <MassUploadButton />

                <EditTableButton<UploadDTO> url={APIMock.massUploads()} items={columns} />
            </div>
            <div className="col-span-3">
                <SearchField url={APIMock.massUploads()} />
            </div>
        </div>
    );
});

export default Header;
