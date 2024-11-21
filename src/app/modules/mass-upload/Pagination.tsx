import {memo} from 'react';

import PaginationTableDND from '@/app/components/PaginationTableDND/PaginationTableDND';
import columns from '@/app/modules/mass-upload/columns';
import MassUploadButton from '@/app/modules/mass-upload/FileUpload';
import {UploadDTO} from '@/app/modules/mass-upload/types';
import API from '@/libs/API';

const Pagination = memo((): JSX.Element | null => {
    return (
        <PaginationTableDND<UploadDTO>
            url={API.massUploads()}
            columns={columns}
            buttons={[<MassUploadButton key="mass-upload-button" />]}
        />
    );
});

export default Pagination;
