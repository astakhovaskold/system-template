import {Common} from '@/typings/common';

export interface UploadDTO extends Common {
    vendorOrderId: string;
    fileName: string;
    orderId: number;
    createdBy: string;
    uploadType: string;
    errors: Array<UploadError>;
    uploaded: string;
    status: MASS_UPLOAD_STATUS;
}

export interface UploadError {
    errorMessage: string;
    lineNumber: number;
    columnValue: string;
    columnName: string;
}

export enum UploadTypes {
    PO_UPLOAD = 'PO_UPLOAD',
}

export enum MASS_UPLOAD_STATUS {
    WORKSHEET = 'Worksheet',
    ERROR = 'Error',
    VALIDATED = 'Validated',
    UPLOADED = 'Uploaded',
    THREADED_AND_EXECUTING = 'Threaded and Executing',
}
