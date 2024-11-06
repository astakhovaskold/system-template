import {PO_STATUS} from '@/app/modules/purchase-orders/types';

export type Status = PO_STATUS | undefined;

export type StatusFilterLabel = {amount: number; status: Status};
