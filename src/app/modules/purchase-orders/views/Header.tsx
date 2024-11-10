import {memo} from 'react';

import SearchField from '@/app/components/forms/fields/SearchField';
import EditTableButton from '@/app/components/PaginationTable/EditTableButton';
import columns from '@/app/modules/purchase-orders/columns';
import {PurchaseOrderListDTO} from '@/app/modules/purchase-orders/types';
import APIMock from '@/libs/APIMock';

const Header = memo((): JSX.Element | null => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-9">
                <EditTableButton<PurchaseOrderListDTO> url={APIMock.purchaseOrders()} items={columns} />
            </div>
            <div className="col-span-3">
                <SearchField url={APIMock.purchaseOrders()} />
            </div>
        </div>
    );
});

export default Header;
