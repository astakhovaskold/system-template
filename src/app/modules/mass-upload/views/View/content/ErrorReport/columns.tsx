import {ColumnsType} from 'antd/es/table';

import {UploadError} from '@/app/modules/mass-upload/types';

const columns: ColumnsType<UploadError> = [
    {
        dataIndex: 'lineNumber',
        title: 'Line Number',
    },
    {
        dataIndex: 'columnName',
        title: 'Column Name',
    },
    {
        dataIndex: 'columnValue',
        title: 'Column Value',
    },
    {
        dataIndex: 'errorMessage',
        title: 'Error Message',
    },
];

export default columns;
