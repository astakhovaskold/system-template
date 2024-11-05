import {Input} from 'antd';
import {memo, useCallback} from 'react';

import useFilterPagination from '@/hooks/pagination/useFilterPagination';

interface SearchFieldProps {
    url: string;
}

const {Search} = Input;

const SearchField = memo<SearchFieldProps>(({url}): JSX.Element | null => {
    const [, setFilter] = useFilterPagination(url);

    const onSearch = useCallback(
        (value: string) => {
            if (value.length > 3) {
                setFilter({search: value});
            }
        },
        [setFilter],
    );

    const onClear = useCallback(() => {
        setFilter({search: undefined});
    }, [setFilter]);

    return <Search placeholder="Search" onSearch={onSearch} onClear={onClear} allowClear />;
});

export default SearchField;
