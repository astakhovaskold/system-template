export type paginationFilter = Record<string, unknown>;

export type paginationColumns = Array<{key: string; hidden: boolean; width?: number | string}>;

export interface PaginationFilterData {
    url: string;
    filter: Partial<paginationFilter>;
}

export interface PaginationParamsData {
    url: string;
    params: Partial<PaginationParams>;
}

export interface PaginationConfig extends Record<string, Record<string, unknown>> {
    columns: Record<string, paginationColumns>;
}

export interface PaginationParams {
    page: number;
    size: number;
    ordering?: string;
}

export type paginationState = {
    params: Record<string, PaginationParams>;
    filter: Record<string, paginationFilter>;
    columns: Record<string, paginationColumns>;
    defaultParams: PaginationParams;
    defaultConfig: PaginationConfig;
};

export interface PaginationAction {
    setParams: (url: string, params: Partial<PaginationParams>) => void;
    setFilter: (url: string, params: Partial<paginationFilter>) => void;
    setColumns: (url: string, params: paginationColumns) => void;
    setConfig: (url: string, config: keyof PaginationConfig, params: paginationColumns) => void;
}
