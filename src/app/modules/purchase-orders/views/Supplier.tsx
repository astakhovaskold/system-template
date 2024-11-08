import {memo} from 'react';

import {SupplierDTO} from '@/app/modules/purchase-orders/types';
import {NO_DATA} from '@/libs/text';

interface SupplierProps {
    supplierName: SupplierDTO['title'];
    supplierCountry?: SupplierDTO['country'];
}

const Supplier = memo<SupplierProps>(({supplierName, supplierCountry = NO_DATA}): JSX.Element | null => {
    return (
        <span className="text-base">
            {supplierName}
            &nbsp;&bull;&nbsp;
            {supplierCountry}
        </span>
    );
});

export default Supplier;
