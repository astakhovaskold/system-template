import {UploadDTO} from '@/app/modules/mass-upload/types';
import {PurchaseOrderItemDTO, PurchaseOrderListDTO} from '@/app/modules/purchase-orders/types';
import {UserDTO} from '@/store/account/types';

export type chunks = Array<unknown>;

export default class API {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected constructor() {}

    protected static get version() {
        return 1;
    }

    protected static get PREFIX_API() {
        return '/api';
    }

    protected static get PREFIX_VERSION() {
        return `/v${this.version}`;
    }

    protected static get api() {
        return `${this.PREFIX_API}${this.PREFIX_VERSION}`;
    }

    protected static joinChunks(...chunks: chunks): string {
        const suffix = chunks.join('/');
        return suffix.length ? `/${suffix}` : '';
    }

    // services
    protected static get poService(): string {
        return '/po-service';
    }

    // app
    static auth(): string;
    static auth(chunk: 'login' | 'logout' | 'refresh-token' | 'profile'): string;
    static auth(...chunks: chunks): string {
        const prefix = '/auth';
        return `${this.api}${prefix}${this.joinChunks(...chunks)}`;
    }

    static users(): string;
    static users(id: UserDTO['id'], command?: 'profile'): string;
    static users(...chunks: chunks): string {
        const prefix = '/users';
        return `${this.api}${prefix}${this.joinChunks(...chunks)}`;
    }

    static purchaseOrders(): string;
    static purchaseOrders(
        id: PurchaseOrderListDTO['id'],
        command?: 'items',
        entityId?: PurchaseOrderItemDTO['id'],
        command2?: 'locations',
    ): string;
    static purchaseOrders(...chunks: chunks): string {
        const prefix = '/purchase-orders';
        return `${this.poService}${this.api}${prefix}${this.joinChunks(...chunks)}`;
    }

    static massUploads(): string;
    static massUploads(id: UploadDTO['id']): string;
    static massUploads(...chunks: chunks): string {
        const prefix = '/uploads';
        return `${this.poService}${this.api}${prefix}${this.joinChunks(...chunks)}`;
    }

    static uploads(): string;
    static uploads(...chunks: chunks): string {
        const prefix = '/uploads';
        return `${this.poService}${this.api}${prefix}${this.joinChunks(...chunks)}`;
    }
}
