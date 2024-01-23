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
    centerAction?: ReactElement,
    rightAction?: ReactElement

    onChange?: (value: any[]) => void
    noTotalRows?: boolean,
    noPagination?: boolean,
    noHeader?: boolean,

    paging?: TPageResponseVO,
    maxRowsWithoutScroll?: number,

    noJumper?: boolean,
    jumperText?: string,

    noDataText?: string,
    noDataContent?: {
        title: string,
        addButtonHandler(): void,
    }

    onChangePageNumber?(value): void,
}
