import {memo, useMemo} from 'react';

import {NO_DATA} from '@/libs/text';
import Utils from '@/libs/Utils';

export interface CostViewProps {
    exchangeRate?: number | null;
    cost?: number | null;
    primaryCurrency: string;
    supplierCurrency: string;
}

const CostView = memo<CostViewProps>(({exchangeRate, primaryCurrency, cost, supplierCurrency}): JSX.Element | null => {
    const supplierCost = useMemo(
        () => Math.fround(cost && exchangeRate ? cost * exchangeRate : 0),
        [exchangeRate, cost],
    );

    if (!cost || !exchangeRate) return <>{NO_DATA}</>;

    const items = [Utils.currencyFormat(cost, primaryCurrency), Utils.currencyFormat(supplierCost, supplierCurrency)];

    return <>{items.join(', ')}</>;
});

export default CostView;
