import {createJSONStorage, persist} from 'zustand/middleware';
import {create} from 'zustand/react';

import {PaginationAction, PaginationConfig, paginationState} from '@/store/pagination/types';

const usePagination = create(
    persist<paginationState & PaginationAction>(
        (set, get) => ({
            params: {},
            filter: {},
            columns: {},
            defaultParams: {
                page: 0,
                size: 10,
            },
            defaultConfig: {
                columns: {},
            },
            setParams: (url, params) => {
                const state = get();
                const prevParams = state.params[url];

                set({
                    ...state,
                    params: {
                        ...state.params,
                        [url]: {
                            ...state.defaultParams,
                            ...prevParams,
                            ...params,
                        },
                    },
                });
            },
            setFilter: (url, params) => {
                const state = get();
                const prevFilter = state.filter[url];

                set({
                    ...state,
                    filter: {
                        ...state.filter,
                        [url]: {
                            ...state.defaultParams,
                            ...prevFilter,
                            ...params,
                        },
                    },
                });
            },
            setColumns: (url, selected) => {
                const state = get();

                set({
                    ...state,
                    columns: {
                        ...state.columns,
                        [url]: selected,
                    },
                });
            },
            setConfig: (url, config, selected) => {
                const state = get();

                set({
                    ...state,
                    defaultConfig: {
                        ...state.defaultConfig,
                        [config]: {
                            ...(state.defaultConfig[config] as PaginationConfig),
                            [url]: selected,
                        },
                    },
                });
            },
        }),
        {
            name: `${__UNIQUE_STATE__}_pagination`,
            storage: createJSONStorage(() => localStorage),
            // @ts-ignore
            partialize: state => ({
                ...state,
                filter: {
                    ...state.filter,
                    search: undefined,
                },
            }),
        },
    ),
);

export default usePagination;
