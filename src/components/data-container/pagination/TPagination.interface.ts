import {TBaseProps} from '@/common/base/TBase.interface';

export interface TPaginationProps extends TBaseProps {

    totalPages: number,
    pageNumber: number,

    onChangePageNumber(value: number): void,
}


export interface TPaginationRef {
    nextPage(): void,
    nextPageSet(): void,
    previousPage(): void,
    previousPageSet(): void,
}
