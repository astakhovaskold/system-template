import {ROLES} from '@/store/account/types';

export const GRANT_ALL = [ROLES.ADMIN, ROLES.SECURITY_ADMIN, ROLES.OBSERVER, ROLES.OPERATOR];

export const ORDERS_MANAGE = [ROLES.ADMIN];
export const ORDERS_VIEW = ORDERS_MANAGE;

export const ORDERS_MODULE = Array.from(new Set([...ORDERS_VIEW]));
