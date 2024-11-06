import {UserDTO} from '@/store/account/types';
import {Common} from '@/typings/common';

export interface SupplierDTO extends Common {
    title: string;
    country: string;
}

export interface PurchaseOrderDTO extends Common {
    totalOrderCost: number;
    raisedBy: UserDTO['id'];
    raisedByName: string;
    createdAt: Date | string;
    supplierId: SupplierDTO['id'];
    supplierName: SupplierDTO['title'];
    supplierCountry: SupplierDTO['country'];
    status: PO_STATUS;
    statusName: string;
    orderItems: number;
}

export enum PO_STATUS {
    APPROVED = 'approved',
    REJECTED = 'rejected',
    PENDING = 'pending',
    CLOSED = 'closed',
}
