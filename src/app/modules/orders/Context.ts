import {createContext} from 'react';

import {OrderDTO} from '@/app/modules/orders/types';

interface Ctx {
    item?: OrderDTO;
}

const Context = createContext<Ctx | null>(null);

export default Context;
