import {UniqueIdentifier} from '@dnd-kit/core';
import {HTMLAttributes} from 'react';

export interface HeaderCellProps extends HTMLAttributes<HTMLTableCellElement> {
    id: string;
}

export interface BodyCellProps extends HTMLAttributes<HTMLTableCellElement> {
    id: string;
}

export interface DragNDropCtx {
    active: UniqueIdentifier;
    over: UniqueIdentifier | undefined;
    direction?: 'left' | 'right';
}
