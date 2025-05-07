import type {Ref} from 'react';

import type {TBaseProps} from '@/common/base/TBase.interface';

export interface TPaginationProps extends TBaseProps {
    totalPages: number;
    pageNumber: number;
    noJumper?: boolean;
    jumperText?: string;

    ref?: Ref<TPaginationRef>;

    onChangePageNumber(value: number): void;
}

export interface TPaginationRef {
    nextPage(): void;
    nextPageSet(): void;
    previousPage(): void;
    previousPageSet(): void;
}
