import {memo, useEffect} from 'react';
import {Outlet} from 'react-router';

import '@/styles/main.css';
import '@/assets/fonts/fonts.css?url';

import AxiosInterceptorAccess from '@/app/components/Utils/AxiosInterceptorAccess';

import bootstrap from '@/libs/mockApi';
import {GenerateOrderList} from '@/libs/mockData';

const App = memo((): JSX.Element | null => {
    useEffect(() => {
        bootstrap();

        console.log(new GenerateOrderList().get());
    }, []);

    return (
        <>
            <AxiosInterceptorAccess />

            <Outlet />
        </>
    );
});

export default App;
