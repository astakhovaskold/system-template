import {memo, useContext} from 'react';

import Context from '@/app/modules/purchase-orders/Context';
import CostView, {CostViewProps} from '@/app/modules/purchase-orders/views/CostView';
import ExchangeRate from '@/app/modules/purchase-orders/views/ExchangeRate';
import DescriptionList from '@/app/ui/DescriptionList';

interface CostsProps {}

const Costs = memo<CostsProps>((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {
        orderCurrency,
        exchangeRate,
        primaryCurrency,
        totalOrderCost,
        landedCost,
        outstandingCost,
        canceledCost,
        expenses,
        discount,
    } = item;

    const costViewProps: CostViewProps = {
        exchangeRate,
        primaryCurrency,
        supplierCurrency: 'USD',
    };

    return (
        <DescriptionList
            title="Costs"
            dataSource={[
                {
                    label: 'Order Currency',
                    value: orderCurrency,
                },
                {
                    label: 'Exchange Rate',
                    value: <ExchangeRate item={item} />,
                },
                {label: 'Total Order Cost', value: <CostView {...costViewProps} cost={totalOrderCost} />},
                {label: 'Landed Cost', value: <CostView {...costViewProps} cost={landedCost} />},
                {label: 'Outstanding Cost', value: <CostView {...costViewProps} cost={outstandingCost} />},
                {label: 'Cancelled Cost', value: <CostView {...costViewProps} cost={canceledCost} />},
                {label: 'Expenses', value: <CostView {...costViewProps} cost={expenses} />},
                {label: 'Discount', value: <>{discount} %</>},
            ]}
        />
    );
});

export default Costs;
