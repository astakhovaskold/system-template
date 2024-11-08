import {memo} from 'react';

import MassUploadButton from '@/app/modules/mass-upload/FileUpload';

const Header = memo((): JSX.Element | null => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-9">
                <MassUploadButton />
            </div>
            <div className="col-span-3"></div>
        </div>
    );
});

export default Header;
