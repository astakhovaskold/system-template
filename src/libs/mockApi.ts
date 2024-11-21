import {createServer} from 'miragejs';

import APIMock from '@/libs/APIMock';
import {
    mockMUList,
    mockPOList,
    mockMUView,
    mockPOView,
    mockUsers,
    uploadedFileResponse,
    mockPOItem,
    mockOrderItemsLocationsList,
} from '@/libs/mockData';
createServer({
    routes() {
        this.get(APIMock.purchaseOrders(), (_, request) => mockPOList(request));
        this.get(APIMock.purchaseOrders(1234333), () => mockPOView);
        this.get(APIMock.purchaseOrders(1234333, 'items', 7165256), () => mockPOItem);
        this.get(APIMock.purchaseOrders(1234333, 'items', 7165256, 'locations'), (_, request) =>
            mockOrderItemsLocationsList(request),
        );

        this.get(APIMock.users(), () => mockUsers);

        this.post(APIMock.uploads(), () => uploadedFileResponse, {timing: 1500});

        this.get(APIMock.massUploads(), (_, request) => mockMUList(request), {timing: 500});
        this.get(APIMock.massUploads(1234333), () => mockMUView, {timing: 500});

        this.passthrough();
    },
});
