import clsx from 'clsx';
import {memo} from 'react';
import {Link} from 'react-router-dom';

import {APP_NAME} from '@/libs/text';

interface LogoProps {
    collapsed?: boolean;
    className?: string;
}

const Logo = memo<LogoProps>(({collapsed = false, className}): JSX.Element | null => {
    return (
        <Link
            to="/"
            className={clsx(
                'text-2xl text-white hover:text-white hover:opacity-80 font-bold',
                {
                    'text-center': collapsed,
                },
                className,
            )}
        >
            {APP_NAME}
        </Link>
    );
});

export default Logo;
