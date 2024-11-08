import {RcFile} from 'antd/es/upload';
import {UploadFile} from 'antd/es/upload/interface';
import {Dispatch, SetStateAction} from 'react';

export interface FileUploaderProps {
    url: string;
    accept?: Array<string>;
    maxFileSize?: number;
    setFileList?: Dispatch<SetStateAction<Array<UploadFile<RcFile>>>>; // if we need to control fileList
}
