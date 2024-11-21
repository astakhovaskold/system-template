import {memo, useContext} from 'react';

import DateView from '@/app/components/Presentation/DateView';
import Context from '@/app/modules/mass-upload/Context';
import Status from '@/app/modules/mass-upload/views/Status';
import DescriptionList from '@/app/ui/DescriptionList';

const ItemInfo = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    const {id, orderId, vendorOrderId, uploadType, createdBy, uploaded, status} = item;

    return (
        <DescriptionList
            title="Item Info"
            dataSource={[
                {
                    label: 'Upload Ref. #',
                    value: id,
                },
                {label: 'Order #', value: orderId},
                {label: 'Vendor Order #', value: vendorOrderId},
                {label: 'Upload Type', value: uploadType},
                {label: 'Created By', value: createdBy},
                {label: 'Uploaded', value: <DateView date={uploaded} />},
                {label: 'Status', value: <Status status={status} />},
            ]}
        />
    );
});

export default ItemInfo;
