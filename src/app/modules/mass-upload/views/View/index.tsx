import {memo, useContext} from 'react';

import Context from '@/app/modules/mass-upload/Context';
import ErrorReport from '@/app/modules/mass-upload/views/View/content/ErrorReport';
import ItemInfo from '@/app/modules/mass-upload/views/View/content/ItemInfo';

const View = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};
    if (!item) return null;

    return (
        <div className="flex flex-col gap-10">
            <ItemInfo />
            <ErrorReport />
        </div>
    );
});
export default View;
