import {lazy} from 'react';

import Auth from '@/app/pages/Auth';
import Welcome from '@/app/pages/Welcome';
import {RouteItem} from '@/router/types';

const Unauthorized = lazy(() => import('@/app/pages/error/Unauthorized'));

const OrdersList = lazy(() => import('@/app/modules/orders/List'));
const OrdersPage = lazy(() => import('@/app/modules/orders/Page'));

const modules: Array<RouteItem> = [
    {
        path: 'orders',
        title: 'Orders',
        component: OrdersList,
        toNav: true,
    },
    {
        path: 'orders/:id',
        title: 'Order',
        component: OrdersPage,
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
