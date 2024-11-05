import {RiLuggageCartLine} from '@remixicon/react';
import {ReactNode} from 'react';

import {ROLES} from '@/store/account/types';
import {PO_MODULE} from '@/store/permissions';

export interface Module {
    name: string;
    title: string;
    image: ReactNode;
    permissions: Array<ROLES>;
    isNew?: boolean;
}

const modules: Array<Module> = [
    {
        name: 'purchase-orders',
        title: 'Purchase Order Management',
        image: <RiLuggageCartLine />,
        permissions: PO_MODULE,
        isNew: true,
    },
];

export default modules;
