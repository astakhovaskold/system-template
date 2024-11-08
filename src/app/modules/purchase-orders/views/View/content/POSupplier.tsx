import {memo, useContext} from 'react';

import DateView from '@/app/components/Presentation/DateView';
import Context from '@/app/modules/purchase-orders/Context';
import DescriptionList from '@/app/ui/DescriptionList';

interface POSupplierProps {}

const POSupplier = memo<POSupplierProps>((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {
        importCountry,
        paymentTermsName,
        poType,
        location,
        locationPickUp,
        orderApprovalDate,
        notBeforeDate,
        notAfterDate,
        earliestShipDate,
        latestShipmentDate,
        estimatedRDCInStock,
        otbEndOfWeekDate,
    } = item;

    return (
        <DescriptionList
            title="Supplier"
            dataSource={[
                {
                    label: 'Import Country',
                    value: importCountry,
                },
                {label: 'Payment Terms Name', value: paymentTermsName},
                {label: 'PO Type', value: poType},
                {label: 'Location', value: location},
                {label: 'Location Pick Up #', value: locationPickUp},
                {
                    label: 'Order Approval Date',
                    value: <DateView date={orderApprovalDate} />,
                },
                {label: 'Not Before', value: <DateView date={notBeforeDate} />},
                {label: 'Not After', value: <DateView date={notAfterDate} />},
                {label: 'Earliest Ship Date', value: <DateView date={earliestShipDate} />},
                {label: 'Latest Ship Date', value: <DateView date={latestShipmentDate} />},
                {
                    label: 'Estimated RDC In Stock',
                    value: <DateView date={estimatedRDCInStock} />,
                },
                {
                    label: 'OTB End of Week Date',
                    value: <DateView date={otbEndOfWeekDate} />,
                },
            ]}
        />
    );
});

export default POSupplier;
