import {createServer} from 'miragejs';

import APIMock from '@/libs/APIMock';
import {mockPOList, mockUsers} from '@/libs/mockData';

createServer({
    routes() {
        this.get(APIMock.purchaseOrders(), (_, request) => mockPOList(request));

        this.get(APIMock.users(), () => mockUsers);
    },
});
