import {memo} from 'react';

const Filter = memo((): JSX.Element | null => {
    return (
        <div className="grid grid-cols-12 items-center">
            <div className="col-span-9"></div>
            <div className="col-span-3"></div>
        </div>
    );
});

export default Filter;
