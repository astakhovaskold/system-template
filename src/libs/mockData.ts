import {PaginationResult} from '@/app/components/PaginationTable/types';
import {ORDER_STATUS, ORDER_TYPE, OrderDTO, OrderListDTO} from '@/app/modules/orders/types';
import {randomBoolean, randomInt, randomLowercase, randomUppercase} from '@/libs/generate';

import {AccountDTO, ROLES, UserDTO} from '@/store/account/types';
import {GRANT_ALL} from '@/store/permissions';

export const mockAccount: AccountDTO = {
    user: {
        id: 1,
        username: 'demo',
        first_name: 'John',
        last_name: 'Doe',
        email: `${randomLowercase(6)}@example.com`,
        role: ROLES.ADMIN,
    },
    access_token: '0000-0000',
    refresh_token: '0000-0000',
};

export const MOCK_USERNAME = import.meta.env.VITE_USERNAME;
export const MOCK_PASSWORD = import.meta.env.VITE_PASSWORD;

export class GenerateUser {
    private readonly response: UserDTO;

    private generator(): UserDTO {
        return {
            id: randomInt(),
            username: randomLowercase(),
            email: `${randomLowercase(6)}@example.com`,
            first_name: randomUppercase(),
            last_name: randomUppercase(),
            role: GRANT_ALL[randomInt(0, GRANT_ALL.length)],
        };
    }

    constructor() {
        this.response = this.generator();
    }

    public get(): UserDTO {
        return this.response;
    }
}

export class GenerateUsers {
    private readonly response: Array<UserDTO> = [];

    constructor() {
        this.response = new Array(10).map(() => new GenerateUser().get());
    }

    public get(): Array<UserDTO> {
        return this.response;
    }
}

export class GenerateOrderList {
    private readonly response: PaginationResult<OrderListDTO>;

    private generator(): OrderListDTO {
        const statuses = Object.values(ORDER_STATUS);

        return {
            id: randomInt(),
            status: statuses.find((_, i) => randomInt(0, statuses.length) === i) || ORDER_STATUS.PENDING,
            contact: randomUppercase(5),
            cost: randomInt(1000, 10000),
            orderCurrency: randomBoolean() ? 'USD' : 'EUR',
            supplierName: randomUppercase(),
            supplierCode: randomUppercase(5),
            supplierSiteId: randomInt(1000, 9999),
            discount: randomInt(0, 20),
            importer: randomUppercase(),
            type: ORDER_TYPE.IMPORT,
        };
    }

    constructor(total = 10, size = 10) {
        this.response = {
            content: new Array(total).fill(undefined).map(() => this.generator()),
            totalPages: Math.round(total / size),
            totalElements: total,
        };
    }

    public get(): PaginationResult<OrderListDTO> {
        return this.response;
    }
}

export class GenerateOrder {
    private readonly response: OrderDTO;

    private generator(): OrderDTO {
        const statuses = Object.values(ORDER_STATUS);

        return {
            id: randomInt(),
            status: statuses.find((_, i) => randomInt(0, statuses.length) === i) || ORDER_STATUS.PENDING,
            contact: randomUppercase(5),
            cost: randomInt(1000, 10000),
            orderCurrency: randomBoolean() ? 'USD' : 'EUR',
            supplierName: randomUppercase(),
            supplierCode: randomUppercase(5),
            supplierSiteId: randomInt(1000, 9999),
            discount: randomInt(0, 20),
            importer: randomUppercase(),
            type: ORDER_TYPE.IMPORT,
        };
    }

    constructor() {
        this.response = this.generator();
    }

    public get(): OrderDTO {
        return this.response;
    }
}
