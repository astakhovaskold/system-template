import {createContext} from 'react';

import {UploadDTO} from '@/app/modules/mass-upload/types';

interface Ctx {
    item?: UploadDTO;
}

const Context = createContext<Ctx | null>(null);

export default Context;
