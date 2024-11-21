import {useCallback} from 'react';
import {useShallow} from 'zustand/react/shallow';

import usePagination from '@/store/pagination/pagination';
import {paginationColumns, PaginationConfig} from '@/store/pagination/types';

type setConfigFn<T> = (selected: T) => void;

function useConfigPagination<T extends paginationColumns>(
    url: string,
    config: keyof PaginationConfig,
): [T, setConfigFn<T>] {
    const configPagination = usePagination(
        useShallow(state => (state.defaultConfig[config]?.[url] as unknown as T) ?? {}),
    );
    const set = usePagination(useShallow(state => state.setConfig));

    const setConfig: setConfigFn<T> = useCallback(
        params => {
            set(url, config, params);
        },
        [config, set, url],
    );

    return [configPagination, setConfig];
}

export default useConfigPagination;
