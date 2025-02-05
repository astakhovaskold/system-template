import {memo, useEffect} from 'react';
import {Outlet} from 'react-router';

import '@/styles/main.css';
import '@/assets/fonts/fonts.css?url';

import AxiosInterceptorAccess from '@/app/components/Utils/AxiosInterceptorAccess';

import bootstrap from '@/libs/mockApi';

const App = memo((): JSX.Element | null => {
    useEffect(() => {
        bootstrap();
    }, []);

    return (
        <>
            <AxiosInterceptorAccess />

            <Outlet />
        </>
    );
});

export default App;
