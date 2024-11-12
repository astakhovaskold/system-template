import {Common} from '@/typings/common';

export interface UploadDTO extends Common {
    vendorOrderNo: string;
    fileName: string;
    orderNo: number;
    createdBy: string;
    uploadType: string;
    errors: Array<UploadError>;
    uploadRefNo: number;
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
    PENDING = 'PENDING',
    REJECTED = 'REJECTED',
    VALIDATED = 'VALIDATED',
    ERROR = 'ERROR',
}
