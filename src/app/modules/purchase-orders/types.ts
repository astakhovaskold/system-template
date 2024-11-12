import {Common, CommonDate} from '@/typings/common';

export interface SupplierDTO extends Common {
    title: string;
    country: string;
}

export interface PurchaseOrderItemDTO extends Common {
    unitCostUOP?: number | null;
    itemType: string; // enum ?
    color: string;
    unitOfPurchase: number; // reference to DTO ?
    totalELCUOP?: number | null;
    locationType: string; // enum ?
    locationName: string;
    costSource: string; // reference ?
    localCurrency: string; // enum ?
    unitELCUOP?: number | null;
    itemParent: string; // ItemDTO
    currency: string; // enum ?
    itemDescription: string;
    latestShipmentDate: CommonDate;
    estimatedInStockDate: CommonDate;
    itemGrandParent: string; // ItemDTO ?
    nonScaling: string;
    cancelledQtyUOP?: number | null;
    supplierUnitCost?: number | null;
    item: string; // enum ?
    quantity: number;
    countryOfSourcing: string; // CountryDTO ?
    size: string; // enum ?
    variance: number;
    vpn: string; // enum ?
    earliestShipmentDate: CommonDate;
    detailedColorDescription: string;
}

export interface PurchaseOrderDTO extends Common {
    orderType: string;
    importer: number; // reference to ImporterDTO ?
    includeOnOrder: string;
    importOrder: string;
    estimatedRDCInStock: CommonDate;
    discount?: number | null;
    primaryCurrency: string; // enum ?
    totalOrderCost: null;
    canceledCost: null;
    exchangeRate?: number | null; // is correct type ?
    contact: string; // ?
    ediPO: string; // ?
    poStatus: PO_STATUS;
    qcRequired: string;
    latestShipmentDate: CommonDate;
    supplierCode: number; // reference to SupplierDTO ?
    supplierName: string; // reference to SupplierDTO ?
    supplierSiteId: number; // reference to SupplierDTO ?
    otbEndOfWeekDate: CommonDate;
    orderNo: number;
    landedCost?: number | null;
    orderCurrency: string; // enum ?
    notAfterDate: CommonDate;
    notBeforeDate: CommonDate;
    importCountry: string; // enum or DTO ?
    outstandingCost?: number | null;
    locationPickUp: string;
    earliestShipDate: CommonDate;
    vendorOrdNo: string; // string or number ?
    paymentTermsName: string; // enum ?
    orderApprovalDate: CommonDate;
    location: string; // reference to LocationDTO ?
    poType: PO_TYPE;
    items: Array<PurchaseOrderItemDTO>;
    expenses?: number | null;
}

export interface PurchaseOrderListDTO extends Common {
    orderType: string;
    totalOrderRetailExcVAT: number;
    discount: number;
    totalVAT: number;
    routingLocation: string;
    canceledCost: number;
    payMethod: string;
    department: number;
    otbEndOfWeekDate: string;
    orderNo: number;
    landedCost: number;
    orderCurrency: string;
    notAfterDate: string;
    importBillToLocType: string;
    notBeforeDate: string;
    backhaulAllowance: number;
    importCountry: string;
    outstandingCost: number;
    markupPercentRetail: number;
    backhaulType: string;
    vendorOrdNo: string;
    countryOfSourcing: string;
    totalOrderRetailIncVAT: number;
    orderApprovalDate: string;
    pickupDate: string;
    duty: number;
    poType: string;
    importBillToLoc: number;
    orderExchangeRate: number;
    promotion: number;
    expenses: number;
    totalOrderCost: number;
    raisedBy: string;
    supplierName: SupplierDTO['title'];
    supplierCode: number;
    supplierSiteId: number;
    status: PO_STATUS;
}

export enum PO_STATUS {
    APPROVED = 'approved',
    REJECTED = 'rejected',
    PENDING = 'pending',
    CLOSED = 'closed',
}

export enum PO_TYPE {
    IMPORT = 'Import',
}

export enum PO_ORDER_TYPE {
    APPROVED = 'approved',
    REJECTED = 'rejected',
    PENDING = 'pending',
    CLOSED = 'closed',
}
