import {memo} from 'react';

import PageContainer from '@/app/components/Layout/PageContainer';
import List from '@/app/modules/mass-upload/List';

const MassUpload = memo((): JSX.Element | null => {
    return (
        <PageContainer title="Mass Upload">
            <List />
        </PageContainer>
    );
});

export default MassUpload;
