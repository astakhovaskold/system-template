import {Common} from '@/typings/common';

export interface OrderDTO extends Common {
    cost: number;
    status: ORDER_STATUS;
    type: ORDER_TYPE;

    supplierName: string;
    supplierCode: string;
    supplierSiteId: number;

    orderCurrency: string;
    discount: number;

    importer: string;
    contact: string;
}

export interface OrderListDTO extends OrderDTO {}

export enum ORDER_STATUS {
    APPROVED = 'Approved',
    PENDING = 'Pending',
    CLOSED = 'Close',
}

export enum ORDER_TYPE {
    IMPORT = 'Import',
}
