import {useCallback} from 'react';
import {useShallow} from 'zustand/react/shallow';

import usePagination from '@/store/pagination/pagination';
import {paginationColumns} from '@/store/pagination/types';

type setColumnsFn<T> = (selected: T) => void;

function useColumnsPagination<T extends paginationColumns>(url: string): [T, setColumnsFn<T>] {
    const columnsPagination = usePagination(useShallow(state => (state.columns[url] as T) ?? []));
    const set = usePagination(useShallow(state => state.setColumns));

    const setColumns: setColumnsFn<T> = useCallback(
        params => {
            set(url, params);
        },
        [set, url],
    );

    return [columnsPagination, setColumns];
}

export default useColumnsPagination;
