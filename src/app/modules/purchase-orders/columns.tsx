import {ColumnsType} from 'antd/es/table';

import {Link} from 'react-router-dom';

import DateView from '@/app/components/Presentation/DateView';
import {PurchaseOrderListDTO} from '@/app/modules/purchase-orders/types';
import Status from '@/app/modules/purchase-orders/views/Status';

const columns: ColumnsType<PurchaseOrderListDTO> = [
    {
        dataIndex: 'orderNo',
        key: 'orderNo',
        title: 'Order No.',
        render: (_, {id}) => <Link to={`/purchase-orders/${id}`}>{id}</Link>,
    },
    {
        dataIndex: 'orderType',
        key: 'orderType',
        title: 'Order Type',
    },
    {
        dataIndex: 'raisedBy',
        key: 'raisedBy',
        title: 'Raised By',
    },
    {
        key: 'status',
        dataIndex: 'status',
        title: 'Status',
        render: (_, {status}) => <Status status={status} />,
    },
    {
        dataIndex: 'importCountry',
        key: 'importCountry',
        title: 'Import Country',
    },
    {
        dataIndex: 'supplierName',
        key: 'supplierName',
        title: 'Supplier Name',
    },
    {
        dataIndex: 'supplierSiteId',
        key: 'supplierSiteId',
        title: 'Supplier Site',
        hidden: true,
    },
    {
        dataIndex: 'supplierCode',
        key: 'supplierCode',
        title: 'Supplier Code',
        hidden: true,
    },
    {
        dataIndex: 'countryOfSourcing',
        key: 'countryOfSourcing',
        title: 'Country Of Sourcing',
        hidden: true,
    },
    {
        dataIndex: 'importBillToLocType',
        key: 'importBillToLocType',
        title: 'Import/Bill-To Loc Type',
        hidden: true,
    },
    {
        dataIndex: 'importBillToLoc',
        key: 'importBillToLoc',
        title: 'Import/Bill-To Loc',
        hidden: true,
    },
    {
        dataIndex: 'routingLocation',
        key: 'routingLocation',
        title: 'Routing Location',
    },
    {
        dataIndex: 'payMethod',
        key: 'payMethod',
        title: 'Pay Method',
    },
    {
        dataIndex: 'poType',
        key: 'poType',
        title: 'PO Type',
    },
    {
        dataIndex: 'department',
        key: 'department',
        title: 'Department',
    },
    {
        dataIndex: 'promotion',
        key: 'promotion',
        title: 'Promotion',
        hidden: true,
    },
    {
        dataIndex: 'orderCurrency',
        key: 'orderCurrency',
        title: 'Order Currency',
    },
    {
        dataIndex: 'orderExchangeRate',
        key: 'orderExchangeRate',
        title: 'Order Exchange Rate',
    },
    {
        dataIndex: 'pickupDate',
        key: 'pickupDate',
        title: 'Pickup Date',
        render: value => <DateView date={value} />,
    },
    {
        dataIndex: 'notBeforeDate',
        key: 'notBeforeDate',
        title: 'Not Before Date',
        render: value => <DateView date={value} />,
        hidden: true,
    },
    {
        dataIndex: 'notAfterDate',
        key: 'notAfterDate',
        title: 'Not After Date',
        render: value => <DateView date={value} />,
        hidden: true,
    },
    {
        dataIndex: 'otbEndOfWeekDate',
        key: 'otbEndOfWeekDate',
        title: 'OTB End of Week Date',
        render: value => <DateView date={value} />,
    },
    {
        dataIndex: 'orderApprovalDate',
        key: 'orderApprovalDate',
        title: 'Order Approval Date',
        render: value => <DateView date={value} />,
        hidden: true,
    },
    {
        dataIndex: 'vendorOrdNo',
        key: 'vendorOrdNo',
        title: 'Vendor Ord No.',
    },
    {
        dataIndex: 'totalOrderCost',
        key: 'totalOrderCost',
        title: 'Total Order Cost',
    },
    {
        dataIndex: 'landedCost',
        key: 'landedCost',
        title: 'Landed Cost',
        hidden: true,
    },
    {
        dataIndex: 'outstandingCost',
        key: 'outstandingCost',
        title: 'Outstanding Cost',
        hidden: true,
    },
    {
        dataIndex: 'canceledCost',
        key: 'canceledCost',
        title: 'Cancelled Cost',
        hidden: true,
    },
    {
        dataIndex: 'backhaulType',
        key: 'backhaulType',
        title: 'Backhaul Type',
    },
    {
        dataIndex: 'backhaulAllowance',
        key: 'backhaulAllowance',
        title: 'Backhaul Allowance',
        hidden: true,
    },
    {
        dataIndex: 'duty',
        key: 'duty',
        title: 'Duty',
        hidden: true,
    },
    {
        dataIndex: 'expenses',
        key: 'expenses',
        title: 'Expenses',
        hidden: true,
    },
    {
        dataIndex: 'discount',
        key: 'discount',
        title: 'Discount % Off',
    },
    {
        dataIndex: 'markupPercentRetail',
        key: 'markupPercentRetail',
        title: 'Markup % Retail (Excl. VAT)',
        hidden: true,
    },
    {
        dataIndex: 'totalOrderRetailIncVAT',
        key: 'totalOrderRetailIncVAT',
        title: 'Total Order Retail (Incl. VAT)',
        hidden: true,
    },
    {
        dataIndex: 'totalOrderRetailExcVAT',
        key: 'totalOrderRetailExcVAT',
        title: 'Total Order Retail (Excl. VAT)',
        hidden: true,
    },
    {
        dataIndex: 'totalVAT',
        key: 'totalVAT',
        title: 'Total VAT',
        hidden: true,
    },
];

export default columns;
