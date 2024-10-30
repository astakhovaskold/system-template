import {ConfigProvider} from 'antd';
import ruRU from 'antd/locale/ru_RU';
import dayjs from 'dayjs';
// eslint-disable-next-line no-restricted-imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'dayjs/locale/ru';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import queryClient from './libs/queryClient';
import validateMessages from './libs/validateMessages';
import Navigation from './router/Navigation';

dayjs.locale('ru');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider locale={ruRU} form={{validateMessages}}>
                    <Navigation />
            </ConfigProvider>

            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>,
);
