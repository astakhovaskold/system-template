import {useQuery} from '@tanstack/react-query';
import {Spin} from 'antd';
import {memo} from 'react';
import {useParams} from 'react-router-dom';

import PageContainer from '@/app/components/Layout/PageContainer';
import Context from '@/app/modules/purchase-orders/ItemContext';
import {PurchaseOrderItemDTO} from '@/app/modules/purchase-orders/types';
import OrderItem from '@/app/modules/purchase-orders/views/Item';
import API from '@/libs/API';
import {NO_DATA} from '@/libs/text';

const Item = memo((): JSX.Element | null => {
    const {id, itemId} = useParams();
    const {data: item, isLoading} = useQuery<PurchaseOrderItemDTO>({
        queryKey: [API.purchaseOrders(Number(id), 'items', Number(itemId))],
    });

    const titleSuffix = item?.isPack && ' • Pack';
    const title = (itemId ?? NO_DATA) + titleSuffix;

    return (
        <Spin size="large" spinning={isLoading}>
            <PageContainer className="gap-y-2 pb-[7.5rem]" title={title} showBreadcrumbs>
                <Context.Provider value={{item}}>
                    <OrderItem />
                </Context.Provider>
            </PageContainer>
        </Spin>
    );
});

export default Item;
