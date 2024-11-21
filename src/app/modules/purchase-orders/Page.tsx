import {useQuery} from '@tanstack/react-query';
import {Spin} from 'antd';
import {memo} from 'react';
import {useParams} from 'react-router-dom';

import PageContainer from '@/app/components/Layout/PageContainer';
import Context from '@/app/modules/purchase-orders/Context';
import {PurchaseOrderDTO} from '@/app/modules/purchase-orders/types';
import View from '@/app/modules/purchase-orders/views/View';
import API from '@/libs/API';

interface PageProps {}

const Page = memo<PageProps>((): JSX.Element | null => {
    const {id} = useParams();

    const {data: item, isLoading} = useQuery<PurchaseOrderDTO>({queryKey: [API.purchaseOrders(Number(id))]});

    return (
        <Spin size="large" spinning={isLoading}>
            <PageContainer className="gap-y-2 pb-[7.5rem]" title={`Order ${id}`} showBreadcrumbs>
                <Context.Provider value={{item}}>
                    <View />
                </Context.Provider>
            </PageContainer>
        </Spin>
    );
});

export default Page;
