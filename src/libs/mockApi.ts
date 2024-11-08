import {createServer} from 'miragejs';

import APIMock from '@/libs/APIMock';
import {mockPOList, mockPOView, mockUsers, uploadedFileResponse} from '@/libs/mockData';
createServer({
    routes() {
        this.get(APIMock.purchaseOrders(), (_, request) => mockPOList(request));
        this.get(APIMock.purchaseOrders(1234333), () => mockPOView);

        this.get(APIMock.users(), () => mockUsers);
        this.post(APIMock.uploads(), () => uploadedFileResponse, {timing: 1500});
    },
});
