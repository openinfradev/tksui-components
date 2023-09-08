import {useCallback, useState} from 'react';
import {TPageRequestVO, TPageResponseVO} from '../../components';



export default function usePagination() {
    const [value, setValue] = useState<TPageResponseVO>(
        {totalPages: 1, pageNumber: 1, pageSize: 20, totalRows: 0},
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
