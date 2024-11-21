import {
    RiLuggageCartLine,
    RiFileUploadLine,
    RiShoppingBagLine,
    RiMoneyDollarCircleLine,
    RiListSettingsLine,
    RiPlaneLine,
    RiCoinsLine,
    RiSwapLine,
    RiFileListLine,
    RiExchangeDollarLine,
    RiTruckLine,
    RiPriceTag2Line,
} from '@remixicon/react';
import {ReactNode} from 'react';

import {CLASSIC_MODULES} from '@/app/components/Modules/features';
import {ROLES} from '@/store/account/types';
import {PO_MODULE} from '@/store/permissions';

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
              name: 'product-management',
              title: 'Product\nManagement',
              image: <RiShoppingBagLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'pricing-and-promotions',
              title: 'Pricing and Promotions',
              image: <RiMoneyDollarCircleLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'inventory-management',
              title: 'Inventory\nManagement',
              image: <RiListSettingsLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'logistic-trade-management',
              title: 'Logistic - Trade Management',
              image: <RiPlaneLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'cost-maintenance',
              title: 'Cost\nMaintenance',
              image: <RiCoinsLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'stock-replenishment',
              title: 'Stock\nReplenishment',
              image: <RiSwapLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'stock-count',
              title: 'Stock\nCount',
              image: <RiFileListLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'financials-and-stock-ledger',
              title: 'Financials & Stock Ledger',
              image: <RiExchangeDollarLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'customer-order-delivery',
              title: 'Customer\nOrder Delivery',
              image: <RiTruckLine />,
              permissions: PO_MODULE,
          },
          {
              name: 'wholesale-franchise',
              title: 'Wholesale/\nFranchise',
              image: <RiPriceTag2Line />,
              permissions: PO_MODULE,
          },
      ]
    : [];

const modules: Array<Module> = [
    {
        name: 'purchase-orders',
        title: 'Purchase \n Order Management',
        image: <RiLuggageCartLine />,
        permissions: PO_MODULE,
        isNew: true,
    },
    {
        name: 'mass-upload',
        title: 'Mass\nUpload',
        image: <RiFileUploadLine />,
        permissions: PO_MODULE,
        isNew: true,
    },
    ...classicModules,
];

export default modules;
