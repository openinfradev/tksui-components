import {useCallback, useState} from 'react';
import {TPageRequestVO, TPageResponseVO} from '~/data-container/data-grid';


export default function usePagination(initialPageSize = 20) {
    const [value, setValue] = useState<TPageResponseVO>(
        {totalPages: 1, pageNumber: 1, pageSize: initialPageSize, totalRows: 0},
    );


    const setPagination = useCallback((pagination: Partial<TPageResponseVO>): void => {

        setValue((prev) => ({
            ...prev,
            ...pagination,
        }));
    }, []);

    const setTotalPagesAndRows = useCallback((pageResponse: TPageResponseVO): void => {

        setValue((prev) => ({
            ...prev,
            totalPages: pageResponse.totalPages,
            totalRows: pageResponse.totalRows,
        }));
    }, []);

    const setPageSize = useCallback((pageSize: number): void => {

        setValue((prev) => ({...prev, pageSize}));
    }, []);

    const setPageNumber = useCallback((pageNumber: number): void => {

        setValue((prev) => ({...prev, pageNumber}));
    }, []);

    const getPageRequest = useCallback((): TPageRequestVO => {
        return {
            pageSize: value.pageSize,
            pageNumber: value.pageNumber,
        };
    }, [value.pageNumber, value.pageSize]);


    return {value, setPagination, setTotalPagesAndRows, setPageSize, setPageNumber, getPageRequest, ...value};
}
