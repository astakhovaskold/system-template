import {lazy} from 'react';

import Auth from '@/app/pages/Auth';
import Welcome from '@/app/pages/Welcome';
import {RouteItem} from '@/router/types';

const Unauthorized = lazy(() => import('@/app/pages/error/Unauthorized'));
const PurchaseOrdersList = lazy(() => import('@/app/modules/purchase-orders/List'));
const PurchaseOrdersPage = lazy(() => import('@/app/modules/purchase-orders/Page'));

const MassUpload = lazy(() => import('@/app/pages/MassUpload'));

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
        path: 'mass-upload',
        title: 'Mass Upload',
        component: MassUpload,
        toNav: true,
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
