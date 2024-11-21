import {ColumnsType} from 'antd/es/table';

import DateView from '@/app/components/Presentation/DateView';
import {PurchaseOrderItemListDTO} from '@/app/modules/purchase-orders/types';

const columns: ColumnsType<PurchaseOrderItemListDTO> = [
    {
        dataIndex: 'id',
        key: 'id',
        title: 'Item #',
    },
    {
        dataIndex: 'itemDescription',
        key: 'itemDescription',
        title: 'Item Description',
        hidden: true,
    },
    {
        dataIndex: 'countryOfSourcing',
        key: 'countryOfSourcing',
        title: 'Country of Sourcing',
        hidden: true,
    },
    {
        dataIndex: 'costSource',
        key: 'costSource',
        title: 'Cost Source',
        hidden: true,
    },
    {
        dataIndex: 'location',
        key: 'location',
        title: 'Location',
    },
    {
        dataIndex: 'locationType',
        key: 'locationType',
        title: 'Location Type',
        hidden: true,
    },
    {
        dataIndex: 'locationName',
        key: 'locationName',
        title: 'Location Name',
        hidden: true,
    },
    {
        dataIndex: 'unitOfPurchase',
        key: 'unitOfPurchase',
        title: 'Unit of Purchase',
        hidden: true,
    },
    {
        dataIndex: 'quantity',
        key: 'quantity',
        title: 'Quantity',
    },
    {
        dataIndex: 'variance',
        key: 'variance',
        title: 'Variance',
        hidden: true,
    },
    {
        dataIndex: 'currency',
        key: 'currency',
        title: 'Currency',
    },
    {
        dataIndex: 'estimatedInStockDate',
        key: 'estimatedInStockDate',
        title: 'Estimated in Stock Date',
        render: value => <DateView date={value} />,
    },
    {
        dataIndex: 'itemType',
        key: 'itemType',
        title: 'Item# Type',
        hidden: true,
    },
    {
        dataIndex: 'itemParent',
        key: 'itemParent',
        title: 'Item Parent',
        hidden: true,
    },
    {
        dataIndex: 'itemGrandParent',
        key: 'itemGrandParent',
        title: 'Item Grandparent',
        hidden: true,
    },
    {
        dataIndex: 'color',
        key: 'color',
        title: 'Color',
        hidden: true,
    },
    {
        dataIndex: 'style',
        key: 'style',
        title: 'Style',
        hidden: true,
    },
    {
        dataIndex: 'size',
        key: 'size',
        title: 'Size',
        hidden: true,
    },
    {
        dataIndex: 'detailedColorDescription',
        key: 'detailedColorDescription',
        title: 'Detailed Color Description',
        hidden: true,
    },
    {
        dataIndex: 'localCurrency',
        key: 'localCurrency',
        title: 'Local Currency',
        hidden: true,
    },
    {
        dataIndex: 'nonScaling',
        key: 'nonScaling',
        title: 'Non Scaling',
        hidden: true,
    },
    {
        dataIndex: 'unitCostUOP',
        key: 'unitCostUOP',
        title: 'Unit Cost UOP',
        hidden: true,
    },
    {
        dataIndex: 'supplierUnitCost',
        key: 'supplierUnitCost',
        title: 'Supplier Unit Cost',
        hidden: true,
    },
    {
        dataIndex: 'unitELCUOP',
        key: 'unitELCUOP',
        title: 'Unit ELC UOP',
        hidden: true,
    },
    {
        dataIndex: 'totalELCUOP',
        key: 'totalELCUOP',
        title: 'Total ELC UOP',
        hidden: true,
    },
    {
        dataIndex: 'vpn',
        key: 'vpn',
        title: 'VPN',
        hidden: true,
    },
    {
        dataIndex: 'cancelledQtyUOP',
        key: 'cancelledQtyUOP',
        title: 'Cancelled Qty UOP',
        hidden: true,
    },
    {
        dataIndex: 'latestShipmentDate',
        key: 'latestShipmentDate',
        title: 'Latest Shipment Date',
        render: value => <DateView date={value} />,
        hidden: true,
    },
    {
        dataIndex: 'earliestShipmentDate',
        key: 'earliestShipmentDate',
        title: 'Earliest Shipment Date',
        render: value => <DateView date={value} />,
        hidden: true,
    },
];

export default columns;
