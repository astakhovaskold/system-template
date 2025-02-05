import {memo, useContext} from 'react';

import Context from '@/app/modules/orders/ItemContext';
import Status from '@/app/modules/orders/views/Status';
import Supplier from '@/app/modules/orders/views/Supplier';

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
                    Total quantity &nbsp;
                    {item.quantity}
                </span>
                <Status status={item.status} />
            </div>
        </div>
    );
});

export default OrderItem;
