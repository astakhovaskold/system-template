import {memo, useContext} from 'react';

import Context from '@/app/modules/orders/Context';
import DescriptionList from '@/app/ui/DescriptionList';

const Costs = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {orderCurrency, discount} = item;

    return (
        <DescriptionList
            title="Costs"
            dataSource={[
                {
                    label: 'Order Currency',
                    value: orderCurrency,
                },

                {label: 'Discount', value: <>{discount} %</>},
            ]}
        />
    );
});

export default Costs;
