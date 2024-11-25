import {Common, CommonDate} from '@/typings/common';

export interface SupplierDTO extends Common {
    title: string;
    country: string;
}

export interface PurchaseOrderItemListDTO extends Common {
    cancelledQtyUOP?: number | null;
    color: string;
    costSource: string; // reference ?
    countryOfSourcing: string; // CountryDTO ?
    currency: string; // enum ?
    detailedColorDescription: string;
    estimatedInStockDate: CommonDate;
    earliestShipmentDate: CommonDate;
    item: string; // enum ?
    itemDescription: string;
    itemGrandParent: string; // ItemDTO ?
    itemParent: string; // ItemDTO
    itemType: string; // enum ?
    location: number;
    locationName: string;
    locationType: string; // enum ?
    latestShipmentDate: CommonDate;
    localCurrency: string; // enum ?
    nonScaling: string;
    quantity: number;
    size: string; // enum ?
    style: string; // enum ?
    superUnitCost?: number | null; // suggestion for clarity, see below
    totalELCUOP?: number | null;
    unitCostUOP?: number | null;
    unitELCUOP?: number | null;
    unitOfPurchase: number; // reference to DTO ?
    variance: number;
    vpn: string; // enum ?
}

export interface PurchaseOrderItemDTO extends Common {
    supplierName: string;
    orderType: string;
    totalQuantity: number;
    quantity: number;
    status: PO_STATUS;
    isPack: boolean;
}

export interface PurchaseOrderItemLocationListDTO extends Common {
    item: string;
    totalItemQuantity: number;
    itemDescription: string;
    countryOfSourcing: string;
    costSource: string;
    location: number;
    locationType: string;
    locationName: string;
    unitOfPurchase: string;
    quantity: number;
    variance: string;
    currency: string;
    estimatedInStockDate: CommonDate;
    itemType: string;
    itemParent: string;
    itemGrandparent: string;
    color: string;
    style: string;
    size: string;
    detailedColorDescription: string;
    localCurrency: string;
    nonScaling: string;
    unitCostUop: number;
    supplierUnitCost: number;
    unitElcUop: string;
    totalElcUop: string;
    vpn: string;
    cancelledQtyUop: string;
    latestShipmentDate: CommonDate;
    earliestShipmentDate: CommonDate;
}

export interface PurchaseOrderDTO extends Common {
    baseAndSupplierCurrency: number;
    canceledCost: null;
    contact: string; // ?
    department: string;
    discount?: number | null;
    ediPO: string; // ?
    estimatedRDCInStock: CommonDate;
    earliestShipDate: CommonDate;
    exchangeRate?: number | null; // is correct type ?
    expenses?: number | null;
    includeOnOrder: string;
    importCountry: string; // enum or DTO ?
    importOrder: string;
    importer: number; // reference to ImporterDTO ?
    landedCost?: number | null;
    latestShipmentDate: CommonDate;
    location: string; // reference to LocationDTO ?
    locationPickUp: string;
    notAfterDate: CommonDate;
    notBeforeDate: CommonDate;
    orderApprovalDate: CommonDate;
    orderCurrency: string; // enum ?
    orderExchangeRate: number;
    orderNo: number;
    orderType: string;
    otbEndOfWeekDate: CommonDate;
    outstandingCost?: number | null;
    paymentTermsName: string; // enum ?
    payMethod: string;
    poType: PO_TYPE;
    primaryCurrency: string; // enum ?
    qcRequired: string;
    raisedBy: string;
    routingLocationId: number;
    status: PO_STATUS;
    supplierCode: number; // reference to SupplierDTO ?
    supplierName: string; // reference to SupplierDTO ?
    supplierSiteId: number; // reference to SupplierDTO ?
    totalOrderCost: null;
    vendorOrderId: number; // string or number ?
}

export interface PurchaseOrderListDTO extends Common {
    backhaulAllowance: number;
    backhaulType: string;
    canceledCost: number;
    countryOfSourcing: string;
    created: CommonDate;
    department: number;
    discountOff: number;
    duty: number;
    expenses: number;
    group: string;
    importerBillToLoc: number;
    importBillToLocType: string;
    importCountry: string;
    importId: number;
    importOrderInd: number;
    landedCost: number;
    markupPercentRetail: number;
    markupRetailExclVat: number;
    notAfterDate: string;
    notBeforeDate: string;
    orderApprovalDate: CommonDate;
    orderCurrency: string;
    orderExchangeRate: number;
    orderItems: Array<PurchaseOrderItemListDTO> | null;
    orderNo: number;
    orderType: string;
    origApprovalDate: CommonDate;
    otbEndOfWeekDate: CommonDate;
    outstandingCost: number;
    pickupDate: CommonDate;
    payMethod: string;
    poType: PO_TYPE;
    promotion: number;
    raisedBy: string;
    routingLocationId: number;
    status: PO_STATUS;
    supplierCode: number;
    supplierCountry: string; // reference to SupplierDTO ?
    supplierName: SupplierDTO['title'];
    supplierSiteId: number;
    totalOrderCost: number;
    totalOrderRetailExclVAT: number;
    totalOrderRetailInclVAT: number;
    totalVAT: number;
    vendorOrderId: string;
}

export enum PO_STATUS {
    APPROVED = 'Approved',
    PENDING = 'Pending',
    CLOSED = 'Close',
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
