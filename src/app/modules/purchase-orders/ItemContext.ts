import {createContext} from 'react';

import {PurchaseOrderItemDTO} from '@/app/modules/purchase-orders/types';

interface Ctx {
    item?: PurchaseOrderItemDTO;
}

const Context = createContext<Ctx | null>(null);

export default Context;
