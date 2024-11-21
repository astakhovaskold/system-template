import {ColumnsType} from 'antd/es/table';

import DateView from '@/app/components/Presentation/DateView';
import {PurchaseOrderItemLocationListDTO} from '@/app/modules/purchase-orders/types';

const columns: ColumnsType<PurchaseOrderItemLocationListDTO> = [
    {
        key: 'item',
        dataIndex: 'item',
        title: 'Item',
        hidden: true,
    },
    {
        key: 'totalItemQuantity',
        dataIndex: 'totalItemQuantity',
        title: 'Total Item Quantity',
        hidden: true,
    },
    {
        key: 'itemDescription',
        dataIndex: 'itemDescription',
        title: 'Item Description',
        hidden: true,
    },
    {
        key: 'countryOfSourcing',
        dataIndex: 'countryOfSourcing',
        title: 'Country Of Sourcing',
        hidden: true,
    },
    {
        key: 'costSource',
        dataIndex: 'costSource',
        title: 'Cost Source',
        hidden: true,
    },
    {
        key: 'location',
        dataIndex: 'location',
        title: 'Location',
    },
    {
        key: 'locationType',
        dataIndex: 'locationType',
        title: 'Location Type',
        hidden: true,
    },
    {
        key: 'locationName',
        dataIndex: 'locationName',
        title: 'Location Name',
        hidden: true,
    },
    {
        key: 'unitOfPurchase',
        dataIndex: 'unitOfPurchase',
        title: 'Unit Of Purchase',
        hidden: true,
    },
    {
        key: 'quantity',
        dataIndex: 'quantity',
        title: 'Quantity',
    },
    {
        key: 'variance',
        dataIndex: 'variance',
        title: 'Variance',
        hidden: true,
    },
    {
        key: 'currency',
        dataIndex: 'currency',
        title: 'Currency',
    },
    {
        key: 'estimatedInStockDate',
        dataIndex: 'estimatedInStockDate',
        title: 'Estimated In Stock Date',
        render: value => <DateView date={value} />,
    },
    {
        key: 'itemType',
        dataIndex: 'itemType',
        title: 'Item Type',
        hidden: true,
    },
    {
        key: 'itemParent',
        dataIndex: 'itemParent',
        title: 'Item Parent',
        hidden: true,
    },
    {
        key: 'itemGrandparent',
        dataIndex: 'itemGrandparent',
        title: 'Item Grandparent',
        hidden: true,
    },
    {
        key: 'color',
        dataIndex: 'color',
        title: 'Color',
        hidden: true,
    },
    {
        key: 'style',
        dataIndex: 'style',
        title: 'Style',
        hidden: true,
    },
    {
        key: 'size',
        dataIndex: 'size',
        title: 'Size',
        hidden: true,
    },
    {
        key: 'detailedColorDescription',
        dataIndex: 'detailedColorDescription',
        title: 'Detailed Color Description',
        hidden: true,
    },
    {
        key: 'localCurrency',
        dataIndex: 'localCurrency',
        title: 'Local Currency',
        hidden: true,
    },
    {
        key: 'nonScaling',
        dataIndex: 'nonScaling',
        title: 'Non Scaling',
        hidden: true,
    },
    {
        key: 'unitCostUop',
        dataIndex: 'unitCostUop',
        title: 'Unit Cost UOP',
        hidden: true,
    },
    {
        key: 'supplierUnitCost',
        dataIndex: 'supplierUnitCost',
        title: 'Supplier Unit Cost',
        hidden: true,
    },
    {
        key: 'unitElcUop',
        dataIndex: 'unitElcUop',
        title: 'Unit ELC UOP',
        hidden: true,
    },
    {
        key: 'totalElcUop',
        dataIndex: 'totalElcUop',
        title: 'Total ELC UOP',
        hidden: true,
    },
    {
        key: 'vpn',
        dataIndex: 'vpn',
        title: 'VPN',
        hidden: true,
    },
    {
        key: 'cancelledQtyUop',
        dataIndex: 'cancelledQtyUop',
        title: 'Cancelled Qty UOP',
        hidden: true,
    },
    {
        key: 'latestShipmentDate',
        dataIndex: 'latestShipmentDate',
        title: 'Latest Shipment Date',
        hidden: true,
        render: value => <DateView date={value} />,
    },
    {
        key: 'earliestShipmentDate',
        dataIndex: 'earliestShipmentDate',
        title: 'Earliest Shipment Date',
        hidden: true,
        render: value => <DateView date={value} />,
    },
];

export default columns;
