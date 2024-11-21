import {useQuery} from '@tanstack/react-query';

import {Spin} from 'antd';
import {memo} from 'react';
import {useParams} from 'react-router-dom';

import PageContainer from '@/app/components/Layout/PageContainer';
import Context from '@/app/modules/mass-upload/Context';
import {UploadDTO} from '@/app/modules/mass-upload/types';
import View from '@/app/modules/mass-upload/views/View';
import API from '@/libs/API';

interface PageProps {}

const Page = memo<PageProps>((): JSX.Element | null => {
    const {id} = useParams();
    const {data: item, isLoading} = useQuery<UploadDTO>({queryKey: [API.massUploads(Number(id))]});

    return (
        <Spin size="large" spinning={isLoading}>
            <PageContainer className="gap-y-2 pb-[7.5rem]" title={id!} showBreadcrumbs>
                <Context.Provider value={{item}}>
                    <View />
                </Context.Provider>
            </PageContainer>
        </Spin>
    );
});

export default Page;
