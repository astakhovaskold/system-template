import {RiLuggageCartLine, RiShoppingBagLine} from '@remixicon/react';
import {ReactNode} from 'react';

import {CLASSIC_MODULES} from '@/app/components/Modules/features';
import {ROLES} from '@/store/account/types';
import {ORDERS_MODULE} from '@/store/permissions';

export interface Module {
    name: string;
    title: string;
    image: ReactNode;
    permissions: Array<ROLES>;
    isNew?: boolean;
}

const classicModules: Array<Module> = CLASSIC_MODULES
    ? [
          {
              name: 'inactive-module',
              title: 'Inactive Module',
              image: <RiShoppingBagLine />,
              permissions: ORDERS_MODULE,
          },
      ]
    : [];

const modules: Array<Module> = [
    {
        name: 'orders',
        title: 'Order Management',
        image: <RiLuggageCartLine />,
        permissions: ORDERS_MODULE,
        isNew: true,
    },
    ...classicModules,
];

export default modules;
