import {memo, useContext} from 'react';

import Context from '@/app/modules/purchase-orders/Context';
import DescriptionList from '@/app/ui/DescriptionList';

interface DetailsProps {}

const Details = memo<DetailsProps>((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {importer, contact, importOrder, includeOnOrder, qcRequired, ediPO} = item;

    return (
        <DescriptionList
            title="Details"
            dataSource={[
                {
                    label: 'Importer',
                    value: importer,
                },
                {label: 'Contact #', value: contact},
                {label: 'Import Order', value: importOrder},
                {label: 'Include On-Order', value: includeOnOrder},
                {label: 'QС Required', value: qcRequired},
                {label: 'EDI PO', value: ediPO},
            ]}
        />
    );
});

export default Details;
