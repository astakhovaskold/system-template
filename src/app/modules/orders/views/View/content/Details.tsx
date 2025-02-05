import {memo, useContext} from 'react';

import Context from '@/app/modules/orders/Context';
import DescriptionList from '@/app/ui/DescriptionList';

interface DetailsProps {}

const Details = memo<DetailsProps>((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {importer, contact} = item;

    return (
        <DescriptionList
            title="Details"
            dataSource={[
                {
                    label: 'Importer',
                    value: importer,
                },
                {label: 'Contact #', value: contact},
            ]}
        />
    );
});

export default Details;
