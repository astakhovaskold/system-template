import {createServer} from 'miragejs';

import APIMock from '@/libs/APIMock';
import {mockMUList, mockMUView, mockPOView, mockUsers, uploadedFileResponse} from '@/libs/mockData';
createServer({
    routes() {
        this.get(APIMock.purchaseOrders(1234333), () => mockPOView);

        this.get(APIMock.users(), () => mockUsers);

        this.post(APIMock.uploads(), () => uploadedFileResponse, {timing: 1500});

        this.get(APIMock.massUploads(), (_, request) => mockMUList(request), {timing: 500});
        this.get(APIMock.massUploads(1234333), () => mockMUView, {timing: 500});

        this.passthrough();
    },
});
