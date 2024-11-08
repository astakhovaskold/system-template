import {memo, useMemo} from 'react';

import {PurchaseOrderDTO} from '@/app/modules/purchase-orders/types';
import {NO_DATA} from '@/libs/text';
import Utils from '@/libs/Utils';

interface ExchangeRateProps {
    item: PurchaseOrderDTO;
}

// TODO: get currencies from API, not from FE
const ExchangeRate = memo<ExchangeRateProps>(({item}): JSX.Element | null => {
    const {orderCurrency, primaryCurrency, exchangeRate} = item;

    const secondaryCurrency = useMemo(
        () =>
            orderCurrency
                .split(',')
                .map(i => i.trim())
                .find(i => i !== primaryCurrency),
        [orderCurrency, primaryCurrency],
    );

    if (!exchangeRate || !secondaryCurrency) return <>{NO_DATA}</>;

    const items = [
        Utils.currencyFormat(1, primaryCurrency),
        Utils.currencyFormat(exchangeRate, secondaryCurrency, true),
    ];

    return <>{items.join(' = ')}</>;
});

export default ExchangeRate;
