export interface UploadDTO {
    vendorOrderNo: string;
    fileName: string;
    orderNo: number;
    createdBy: string;
    uploadType: string;
    errors: Array<UploadError>;
    uploadRefNo: number;
    status: UploadStatus;
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

export enum UploadStatus {
    PENDING = 'pending',
    REJECTED = 'rejected',
    VALIDATED = 'validated',
    ERROR = 'error',
}
