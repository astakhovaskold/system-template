import styled from '@emotion/styled';
import {Spin, Tabs} from 'antd';
import {lazy, memo, Suspense, useContext} from 'react';

import Context from '@/app/modules/purchase-orders/Context';
import Status from '@/app/modules/purchase-orders/views/Status';
import Supplier from '@/app/modules/purchase-orders/views/Supplier';

const Costs = lazy(() => import('@/app/modules/purchase-orders/views/View/content/Costs'));
const Details = lazy(() => import('@/app/modules/purchase-orders/views/View/content/Details'));
const OrderContents = lazy(() => import('@/app/modules/purchase-orders/views/View/content/OrderContents'));
const POHeader = lazy(() => import('@/app/modules/purchase-orders/views/View/content/POHeader'));
const POSupplier = lazy(() => import('@/app/modules/purchase-orders/views/View/content/POSupplier'));

const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const View = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {importCountry, supplierName, poStatus} = item;

    return (
        <>
            <div className="flex items-center gap-x-3">
                <Supplier supplierName={supplierName} supplierCountry={importCountry} />
                <Status status={poStatus} />
            </div>

            <Tabs
                className="font-semibold"
                items={[
                    {
                        label: 'PO header and Supplier',
                        key: 'header',
                        children: (
                            <TabContainer>
                                <Suspense fallback={<Spin spinning />}>
                                    <POHeader />

                                    <POSupplier />
                                </Suspense>
                            </TabContainer>
                        ),
                    },
                    {
                        label: 'Details and Total Order Cost',
                        key: 'details',
                        children: (
                            <TabContainer>
                                <Suspense fallback={<Spin spinning />}>
                                    <Details />

                                    <Costs />
                                </Suspense>
                            </TabContainer>
                        ),
                    },
                    {
                        label: 'Order Contents',
                        key: 'contents',
                        children: (
                            <TabContainer>
                                <Suspense fallback={<Spin spinning />}>
                                    <OrderContents />
                                </Suspense>
                            </TabContainer>
                        ),
                    },
                ]}
            />
        </>
    );
});

export default View;
