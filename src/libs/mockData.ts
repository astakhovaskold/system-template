import MirageJs from 'miragejs';

import {PaginationResult} from '@/app/components/PaginationTable/types';
import {UploadStatus, UploadTypes, UploadDTO} from '@/app/modules/mass-upload/types';
import {
    PO_STATUS,
    PO_TYPE,
    PurchaseOrderDTO,
    PurchaseOrderItemDTO,
    PurchaseOrderListDTO,
} from '@/app/modules/purchase-orders/types';
import {NO_DATA} from '@/libs/text';
import {AccountDTO, ROLES, UserDTO} from '@/store/account/types';

export const mockAccount: AccountDTO = {
    user: {
        id: 8008135,
        first_name: 'Alex',
        last_name: 'M',
        email: 'mail@example.com',
        role: ROLES.ADMIN,
    },
    access_token: '0000-0000',
    refresh_token: '0000-0000',
};

export const mockUsers: Array<UserDTO> = [
    {id: 1, email: 'john.doe@example.com', first_name: 'John', last_name: 'Doe', role: ROLES.ADMIN},
    {id: 2, email: 'jane.smith@example.com', first_name: 'Jane', last_name: 'Smith', role: ROLES.OBSERVER},
    {id: 3, email: 'michael.johnson@example.com', first_name: 'Michael', last_name: 'Johnson', role: ROLES.OPERATOR},
    {id: 4, email: 'emily.davis@example.com', first_name: 'Emily', last_name: 'Davis', role: ROLES.SECURITY_ADMIN},
    {id: 5, email: 'david.miller@example.com', first_name: 'David', last_name: 'Miller', role: ROLES.ADMIN},
    {id: 6, email: 'olivia.wilson@example.com', first_name: 'Olivia', last_name: 'Wilson', role: ROLES.OBSERVER},
    {id: 7, email: 'daniel.anderson@example.com', first_name: 'Daniel', last_name: 'Anderson', role: ROLES.OPERATOR},
    {
        id: 8,
        email: 'matthew.taylor@example.com',
        first_name: 'Matthew',
        last_name: 'Taylor',
        role: ROLES.SECURITY_ADMIN,
    },
    {id: 9, email: 'sarah.brown@example.com', first_name: 'Sarah', last_name: 'Brown', role: ROLES.ADMIN},
    {id: 10, email: 'james.nelson@example.com', first_name: 'James', last_name: 'Nelson', role: ROLES.OBSERVER},
];

export const mockPOList = (request: MirageJs.Request): PaginationResult<PurchaseOrderListDTO> => ({
    content: [
        {
            id: 1234333,
            totalOrderCost: 12543,
            raisedBy: 2116652,
            raisedByName: 'Sarah Smith',
            createdAt: new Date('04.04.2024').toISOString(),
            supplierId: 9812392,
            supplierName: 'Rose Inc.',
            supplierCountry: 'China',
            status: PO_STATUS.APPROVED,
            statusName: 'Approved',
            orderItems: 1244,
        },
        {
            id: 1234334,
            totalOrderCost: 12543,
            raisedBy: 2116652,
            raisedByName: 'Sarah Smith',
            createdAt: new Date('04.04.2024').toISOString(),
            supplierId: 9812392,
            supplierName: 'Rose Inc.',
            supplierCountry: 'China',
            status: PO_STATUS.APPROVED,
            statusName: 'Approved',
            orderItems: 1244,
        },
        {
            id: 1234335,
            totalOrderCost: 12543,
            raisedBy: 2116652,
            raisedByName: 'Sarah Smith',
            createdAt: new Date('04.04.2024').toISOString(),
            supplierId: 9812392,
            supplierName: 'Rose Inc.',
            supplierCountry: 'China',
            status: PO_STATUS.REJECTED,
            statusName: 'Rejected',
            orderItems: 1244,
        },
        {
            id: 1234336,
            totalOrderCost: 12543,
            raisedBy: 2116652,
            raisedByName: 'Sarah Smith',
            createdAt: new Date('04.04.2024').toISOString(),
            supplierId: 9812392,
            supplierName: 'Rose Inc.',
            supplierCountry: 'China',
            status: PO_STATUS.PENDING,
            statusName: 'Pending',
            orderItems: 1244,
        },
        {
            id: 1234337,
            totalOrderCost: 12543,
            raisedBy: 2116652,
            raisedByName: 'Sarah Smith',
            createdAt: new Date('04.04.2024').toISOString(),
            supplierId: 9812392,
            supplierName: 'Rose Inc.',
            supplierCountry: 'China',
            status: PO_STATUS.APPROVED,
            statusName: 'Approved',
            orderItems: 1244,
        },
        {
            id: 1234338,
            totalOrderCost: 12543,
            raisedBy: 2116652,
            raisedByName: 'Sarah Smith',
            createdAt: new Date('04.04.2024').toISOString(),
            supplierId: 9812392,
            supplierName: 'Rose Inc.',
            supplierCountry: 'China',
            status: PO_STATUS.CLOSED,
            statusName: 'Closed',
            orderItems: 1244,
        },
        {
            id: 1234339,
            totalOrderCost: 12543,
            raisedBy: 2116652,
            raisedByName: 'Sarah Smith',
            createdAt: new Date('04.04.2024').toISOString(),
            supplierId: 9812392,
            supplierName: 'Rose Inc.',
            supplierCountry: 'China',
            status: PO_STATUS.PENDING,
            statusName: 'Pending',
            orderItems: 1244,
        },
        {
            id: 1234340,
            totalOrderCost: 12543,
            raisedBy: 2116652,
            raisedByName: 'Sarah Smith',
            createdAt: new Date('04.04.2024').toISOString(),
            supplierId: 9812392,
            supplierName: 'Rose Inc.',
            supplierCountry: 'China',
            status: PO_STATUS.PENDING,
            statusName: 'Pending',
            orderItems: 1244,
        },
    ],
    totalElements: 10,
    totalPages: request.queryParams.size ? Math.ceil(10 / +request.queryParams.size) : 1,
});

const mockPOItem: PurchaseOrderItemDTO = {
    id: 7165256,
    unitCostUOP: 50.75,
    itemType: 'Product',
    color: 'Blue',
    unitOfPurchase: 100,
    totalELCUOP: 5000.5,
    locationType: 'Warehouse',
    costSource: 'SupplierA',
    localCurrency: 'USD',
    unitELCUOP: 45.0,
    itemParent: 'ITEM_PARENT_ID', // или объект ItemDTO при необходимости
    currency: 'USD',
    itemDescription: 'High-quality steel screws',
    latestShipmentDate: '2024-12-23T00:00:00.000Z',
    estimatedInStockDate: '2024-01-23T00:00:00.000Z',
    itemGrandParent: 'ITEM_GRANDPARENT_ID',
    nonScaling: 'No',
    cancelledQtyUOP: 0,
    supplierUnitCost: 52.5,
    item: 'ITEM_001',
    locationName:
        'Shanghai Special Administrative Region "Penghai," Industrial Harbor Nantan, Plot No. 732, Huangpu River Coastal Strip, Berth 19, Longjiang Port Complex',
    quantity: 500,
    countryOfSourcing: 'China',
    size: 'Medium',
    variance: 0.5,
    vpn: 'vpn1',
    earliestShipmentDate: '2024-11-25T00:00:00.000Z',
    detailedColorDescription: 'Bright blue with a matte finish',
};

export const mockPOView: PurchaseOrderDTO = {
    id: 1234333,
    orderType: NO_DATA,
    importer: 1, // или объект ImporterDTO
    includeOnOrder: 'No',
    importOrder: 'Yes',
    estimatedRDCInStock: '2024-11-25T00:00:00.000Z',
    discount: 3,
    primaryCurrency: 'AED',
    totalOrderCost: null, // пока пусто, можно задать значения позже
    canceledCost: null, // пока пусто
    exchangeRate: 0.27,
    contact: '647584736',
    ediPO: 'No',
    poStatus: PO_STATUS.APPROVED,
    qcRequired: 'Yes',
    latestShipmentDate: '2024-12-15T00:00:00.000Z',
    supplierCode: 1425367, // или объект SupplierDTO
    supplierName: 'Rose Inc.',
    supplierSiteId: 1425367,
    otbEndOfWeekDate: '2024-12-27T00:00:00.000Z',
    orderNo: 123456,
    landedCost: 2000,
    orderCurrency: 'AED, USD',
    notAfterDate: '2024-12-31T00:00:00.000Z',
    notBeforeDate: '2024-11-01T00:00:00.000Z',
    importCountry: 'China',
    outstandingCost: 1500,
    locationPickUp: 'WH1',
    earliestShipDate: '2024-11-25T00:00:00.000Z',
    vendorOrdNo: 'BZ-123233',
    paymentTermsName: 'Net 30 Days',
    orderApprovalDate: '2024-11-24T00:00:00.000Z',
    location:
        'Shanghai Special Administrative Region "Penghai," Industrial Harbor Nantan, Plot No. 732, Huangpu River Coastal Strip, Berth 19, Longjiang Port Complex',
    poType: PO_TYPE.IMPORT,
    items: [mockPOItem],
    expenses: 50.0,
};

export const uploadedFileResponse: UploadDTO = {
    vendorOrderNo: '1421412',
    fileName: 'Table.csv',
    orderNo: 6,
    createdBy: 'Daniil Babichev',
    uploadType: UploadTypes.PO_UPLOAD,
    errors: [],
    uploadRefNo: 5214,
    status: UploadStatus.PENDING,
};
