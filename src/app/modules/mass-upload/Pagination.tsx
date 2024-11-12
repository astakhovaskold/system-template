import {memo} from 'react';

import PaginationTable from '@/app/components/PaginationTable/PaginationTable';
import columns from '@/app/modules/mass-upload/columns';
import {UploadDTO} from '@/app/modules/mass-upload/types';
import APIMock from '@/libs/APIMock';

const Pagination = memo((): JSX.Element | null => {
    return <PaginationTable<UploadDTO> url={APIMock.massUploads()} columns={columns} />;
});

export default Pagination;
