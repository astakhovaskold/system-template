import {memo, useContext} from 'react';

import Context from '@/app/modules/purchase-orders/Context';
import DescriptionList from '@/app/ui/DescriptionList';
import {NO_DATA} from '@/libs/text';

interface HeaderAndSupplierProps {}

const POHeader = memo<HeaderAndSupplierProps>((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {supplierName, supplierCode, supplierSiteId, vendorOrdNo} = item;

    return (
        <DescriptionList
            title="Filter"
            dataSource={[
                {
                    label: 'Order Type',
                    value: NO_DATA,
                },
                {label: 'Supplier Name', value: supplierName},
                {label: 'Supplier Code', value: supplierCode},
                {label: 'Supplier Site Id', value: supplierSiteId},
                {label: 'Vendor Order #', value: vendorOrdNo},
            ]}
        />
    );
});

export default POHeader;
