import {Dayjs} from 'dayjs';

import {PO_STATUS} from '@/app/modules/purchase-orders/types';

export interface Common {
    readonly id: number;
}

export type CommonDate = Date | Dayjs | string;

export interface PasswordData {
    password: string;
    confirmPassword: string;
}

export type Status = PO_STATUS | undefined;

export type ApiCallFn = (url: string) => Promise<unknown>;
