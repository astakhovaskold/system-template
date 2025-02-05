import styled from '@emotion/styled';
import {Spin, Tabs} from 'antd';
import {lazy, memo, Suspense, useContext} from 'react';

import Context from '@/app/modules/orders/Context';
import Status from '@/app/modules/orders/views/Status';

const Costs = lazy(() => import('@/app/modules/orders/views/View/content/Costs'));
const Details = lazy(() => import('@/app/modules/orders/views/View/content/Details'));
const POHeader = lazy(() => import('@/app/modules/orders/views/View/content/POHeader'));

const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const View = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {status} = item;

    return (
        <>
            <div className="flex items-center gap-x-3">
                <Status status={status} />
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
                ]}
            />
        </>
    );
});

export default View;
