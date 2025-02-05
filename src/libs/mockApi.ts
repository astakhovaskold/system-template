import {createServer} from 'miragejs';

import APIMock from '@/libs/APIMock';
import {GenerateUsers, GenerateOrderList, GenerateOrder} from '@/libs/mockData';

function bootstrap() {
    return createServer({
        routes() {
            this.get(APIMock.orders(), () => new GenerateOrderList().get());
            this.get(APIMock.orders('*'), () => new GenerateOrder().get());

            this.get(APIMock.users(), () => new GenerateUsers().get());

            this.passthrough();
        },
    });
}

export default bootstrap;
