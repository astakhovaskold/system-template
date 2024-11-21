import {lazy} from 'react';

import Auth from '@/app/pages/Auth';
import Welcome from '@/app/pages/Welcome';
import {RouteItem} from '@/router/types';

const Unauthorized = lazy(() => import('@/app/pages/error/Unauthorized'));
const PurchaseOrdersList = lazy(() => import('@/app/modules/purchase-orders/List'));
const PurchaseOrdersPage = lazy(() => import('@/app/modules/purchase-orders/Page'));
const PurchaseOrdersItem = lazy(() => import('@/app/modules/purchase-orders/Item'));

const MassUploadList = lazy(() => import('@/app/modules/mass-upload/List'));
const MassUploadPage = lazy(() => import('@/app/modules/mass-upload/Page'));

const modules: Array<RouteItem> = [
    {
        path: 'purchase-orders',
        title: 'Purchase Orders',
        component: PurchaseOrdersList,
        toNav: true,
    },
    {
        path: 'purchase-orders/:id',
        title: 'Purchase Order',
        component: PurchaseOrdersPage,
    },
    {
        path: 'purchase-orders/:id/:itemId',
        title: 'Purchase Order',
        component: PurchaseOrdersItem,
    },
    {
        path: 'mass-upload',
        title: 'Mass Upload',
        component: MassUploadList,
        toNav: true,
    },
    {
        path: 'mass-upload/:id',
        title: 'Mass Upload',
        component: MassUploadPage,
    },
];

export const routes: Array<RouteItem> = [
    {
        path: 'auth',
        component: Auth,
        restrictedWithAuth: true,
        isPublic: true,
    },
    {
        path: '/',
        component: Welcome,
    },
    ...modules,
    {
        path: 'unauthorized',
        component: Unauthorized,
        isPublic: true,
    },
];
