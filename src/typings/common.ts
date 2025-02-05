import {Dayjs} from 'dayjs';

import {ORDER_STATUS} from '@/app/modules/orders/types';

export interface Common {
    readonly id: number;
}

export type CommonDate = Date | Dayjs | string;

export interface PasswordData {
    password: string;
    confirmPassword: string;
}

export type Status = ORDER_STATUS | undefined;

export type ApiCallFn = (url: string) => Promise<unknown>;
