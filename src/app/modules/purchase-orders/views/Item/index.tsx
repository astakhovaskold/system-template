import {memo, useContext} from 'react';

import Context from '@/app/modules/purchase-orders/ItemContext';
import LocationList from '@/app/modules/purchase-orders/views/Item/content/LocationList';
import Status from '@/app/modules/purchase-orders/views/Status';
import Supplier from '@/app/modules/purchase-orders/views/Supplier';

const OrderItem = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3">
                <Supplier supplierName={item.supplierName} />
                <span className="text-base">
                    &bull;&nbsp; Total quantity &nbsp;
                    {item.totalQuantity}
                </span>
                <Status status={item.status} />
            </div>

            <LocationList />
        </div>
    );
});

export default OrderItem;
