import {createContext} from 'react';

import {DragNDropCtx} from '@/app/components/PaginationTableDND/types';

const Context = createContext<DragNDropCtx>({active: -1, over: -1});

export default Context;
