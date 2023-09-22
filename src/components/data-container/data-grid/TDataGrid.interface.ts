import {AgReactUiProps} from 'ag-grid-react/lib/shared/interfaces';
import {ReactElement} from 'react';
import {TBaseProps} from '@/common/base/TBase.interface';


export interface TPageRequestVO {
    pageNumber?: number,
    pageSize?: number,
}

export interface TPageResponseVO extends TPageRequestVO {
    totalPages: number,
    totalRows: number,
}


export interface TDataGridProps extends TBaseProps, AgReactUiProps {
    height?: string,

    leftAction?: ReactElement
    rightAction?: ReactElement

    onChange?: (value: any[]) => void
    noTotalRows?: boolean,
    noPagination?: boolean,
    noHeader?: boolean,

    paging?: {
        pageNumber: number,
        pageSize: number,
        totalPages: number,
        totalRows: number,
    }
    maxRowsWithoutScroll?: number,

    noDataText?: string,
    noDataContent?: {
        title: string,
        addButtonHandler(): void,
    }

    onChangePageNumber?(value): void,
}
