import {createContext} from 'react';

import {PurchaseOrderDTO} from '@/app/modules/purchase-orders/types';

interface Ctx {
    item?: PurchaseOrderDTO;
}

const Context = createContext<Ctx | null>(null);

export default Context;
