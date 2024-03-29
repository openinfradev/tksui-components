import {useCallback, useState} from 'react';
import {TPageRequestVO, TPageResponseVO} from '~/data-container/data-grid';


export default function usePagination(initialPageSize = 20) {
    const [value, setValue] = useState<TPageResponseVO>(
        {totalPages: 1, pageNumber: 1, pageSize: initialPageSize, totalRows: 0},
    );

    const setTotalPagesAndRows = useCallback((pageResponse: TPageResponseVO): void => {

        setValue({
            ...value,
            totalPages: pageResponse.totalPages,
            totalRows: pageResponse.totalRows,
        });
    }, [value]);

    const setPageSize = useCallback((pageSize: number): void => {
        setValue({...value, pageSize});
    }, [value]);

    const setPageNumber = useCallback((pageNumber: number): void => {
        setValue({...value, pageNumber});
    }, [value]);

    const getPageRequest = useCallback((): TPageRequestVO => {
        return {
            pageSize: value.pageSize,
            pageNumber: value.pageNumber,
        };
    }, [value.pageNumber, value.pageSize]);


    return {value, setTotalPagesAndRows, setPageSize, setPageNumber, getPageRequest, ...value};
}
