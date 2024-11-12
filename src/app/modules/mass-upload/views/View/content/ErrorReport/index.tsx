import {Table, Typography} from 'antd';
import {memo, useContext} from 'react';

import Context from '@/app/modules/mass-upload/Context';
import {UploadError} from '@/app/modules/mass-upload/types';
import columns from '@/app/modules/mass-upload/views/View/content/ErrorReport/columns';
import Filter from '@/app/modules/mass-upload/views/View/content/ErrorReport/Filter';

const {Title} = Typography;
const ErrorReport = memo((): JSX.Element | null => {
    const {item} = useContext(Context) ?? {};

    if (!item) return null;

    return (
        <div className="flex flex-col gap-y-4">
            <Title className="!m-0" level={3}>
                Error Report
            </Title>
            <Filter />
            <Table<UploadError>
                pagination={false}
                columns={columns}
                dataSource={item?.errors}
                showSorterTooltip={false}
            />
        </div>
    );
});

export default ErrorReport;
