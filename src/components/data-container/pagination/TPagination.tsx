import {CSSProperties, forwardRef, Ref, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';

import {TPaginationProps, TPaginationRef} from './TPagination.interface';
import TIcon from '../../icon/TIcon';
import TButton from '~/button/button/TButton';
import TNumberField from '~/input/number-field/TNumberField';
import rule from '@/common/validator/TValidatorRule';


const TPagination = forwardRef((props: TPaginationProps, ref: Ref<TPaginationRef>) => {


    // region [Hooks]

    const {onChangePageNumber} = props;

    useImperativeHandle(ref, () => ({
        nextPage(): void { onClickNextPage(); },
        nextPageSet(): void { onClickNextPageSet(); },
        previousPage(): void { onClickPreviousPage(); },
        previousPageSet(): void { onClickPreviousPageSet(); },
        jumpToPage(): void { onClickJumperButton(); },
    }));

    const [pageRange, setPageRange] = useState<{ min: number, max: number }>({min: 1, max: 1});
    const [jumperPage, setJumperPage] = useState<number>(props.pageNumber);
    const numberFieldRef = useRef(null);
    const jumperTextFieldMin = 1;
    // endregion


    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) { clazz.push(props.className); }

        return clazz.join(' ');
    }, [props.className]);


    const rootStyle: CSSProperties = useMemo((): CSSProperties => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;
    }, [props.style]);

    // endregion

    // region [Privates]

    const getPageRange = useCallback((currentPage: number, totalPages: number) => {
        const min = Math.floor((currentPage - 1) / 10) * 10 + 1;
        const max = Math.min(totalPages, min + 9);
        return {min, max};
    }, []);

    const pageButtonClass = useCallback((page: number) => {
        if (page === props.pageNumber) {
            return 't-pagination__page-container__page__button--active';
        }
        return '';
    }, [props.pageNumber]);

    const prevPageButtonClass = useMemo(() => {
        if (props.pageNumber === 1) {
            return 't-pagination__nav-button-container__button--disabled';
        }
        return '';
    }, [props.pageNumber]);

    const nextPageButtonClass = useMemo(() => {
        if (props.pageNumber === props.totalPages) {
            return 't-pagination__nav-button-container__button--disabled';
        }
        return '';
    }, [props.pageNumber, props.totalPages]);


    // endregion


    // region [Events]

    const onClickPageNumber = useCallback((pageNumber: number) => {
        onChangePageNumber(pageNumber);
    }, [onChangePageNumber]);

    const onClickNextPage = useCallback(() => {
        if (props.pageNumber === props.totalPages) { return; }
        const targetPage = props.pageNumber + 1;
        onChangePageNumber(targetPage);
    }, [onChangePageNumber, props.pageNumber, props.totalPages]);

    const onClickNextPageSet = useCallback(() => {
        if (props.pageNumber === props.totalPages) { return; }
        const targetPage = Math.min(pageRange.max + 1, props.totalPages);
        onChangePageNumber(targetPage);
    }, [onChangePageNumber, pageRange.max, props.pageNumber, props.totalPages]);

    const onClickPreviousPage = useCallback(() => {
        if (props.pageNumber === 1) { return; }
        const targetPage = props.pageNumber - 1;
        onChangePageNumber(targetPage);
    }, [onChangePageNumber, props.pageNumber]);

    const onClickPreviousPageSet = useCallback(() => {
        if (props.pageNumber === 1) { return; }
        const targetPage = Math.max(pageRange.min - 1, 1);
        onChangePageNumber(targetPage);
    }, [onChangePageNumber, pageRange.min, props.pageNumber]);

    const onChangeJumperPageNumber = useCallback((pageNumber: string) => {
        setJumperPage(Number(pageNumber));
    }, [pageRange]);

    const onClickJumperButton = useCallback(() => {
        const validResult = numberFieldRef.current?.validate();
        if (validResult === true && onChangePageNumber) { onChangePageNumber(jumperPage); }
    }, [jumperPage, pageRange, onChangePageNumber]);

    // endregion

    // region [Lifecycles]

    useEffect(() => {
        const range = getPageRange(props.pageNumber, props.totalPages);
        setPageRange(range);
        setJumperPage(props.pageNumber);
    }, [getPageRange, props.pageNumber, props.totalPages]);

    // endregion


    return (
        <nav className={`t-pagination ${rootClass}`} style={rootStyle} data-testid={'pagination-root'}>

            <span className={'t-pagination__nav-button-container'}>
                <TIcon className={`t-pagination__nav-button-container__button ${prevPageButtonClass}`}
                       clickable
                       small
                       disabled={props.pageNumber === 1}
                       onClick={onClickPreviousPageSet}
                       onKeyDownEnter={onClickPreviousPageSet}
                       onKeyDownSpace={onClickPreviousPageSet}>keyboard_double_arrow_left</TIcon>
                <TIcon className={`t-pagination__nav-button-container__button ${prevPageButtonClass}`}
                       clickable
                       small
                       disabled={props.pageNumber === 1}
                       onClick={onClickPreviousPage}
                       onKeyDownEnter={onClickPreviousPage}
                       onKeyDownSpace={onClickPreviousPage}>keyboard_arrow_left</TIcon>
            </span>

            <ul className={'t-pagination__page-container'}>
                {
                    Array(pageRange.max - pageRange.min + 1).fill(null).map((_, index) => pageRange.min + index)
                        .map((page) => (
                            <li key={page} className={'t-pagination__page-container__page'}>
                                <button className={`t-pagination__page-container__page__button ${pageButtonClass(page)}`}
                                        onClick={() => onClickPageNumber(page)}
                                >{page}</button>
                            </li>
                        ))
                }
            </ul>

            <span className={'t-pagination__nav-button-container'}>
                <TIcon className={`t-pagination__nav-button-container__button ${nextPageButtonClass}`}
                       clickable
                       small
                       disabled={props.pageNumber === props.totalPages}
                       onClick={onClickNextPage}
                       onKeyDownEnter={onClickNextPage}
                       onKeyDownSpace={onClickNextPage}>keyboard_arrow_right</TIcon>
                <TIcon className={`t-pagination__nav-button-container__button ${nextPageButtonClass}`}
                       clickable
                       small
                       disabled={props.pageNumber === props.totalPages}
                       onClick={onClickNextPageSet}
                       onKeyDownEnter={onClickNextPageSet}
                       onKeyDownSpace={onClickNextPageSet}>keyboard_double_arrow_right</TIcon>
            </span>
            {
                !props.noJumper && (
                    <div className={'t-pagination__jumper__container'} data-testid={'pagination-jumper-root'}>
                        <TNumberField ref={numberFieldRef} className={'t-pagination__jumper__container__page__field'}
                                      value={jumperPage.toString()} min={jumperTextFieldMin} max={props.totalPages}
                                      rules={[rule.valueMin(jumperTextFieldMin), rule.valueMax(props.totalPages)]}
                                      onChange={onChangeJumperPageNumber} onKeyDownEnter={onClickJumperButton}
                        />
                        <TButton className={'t-pagination__jumper__container__short-cut__button'} onClick={onClickJumperButton}>
                            {props.jumperText}
                        </TButton>
                    </div>
                )
            }

        </nav>
    );
});
TPagination.defaultProps = {
    jumperText: '바로가기',
};

TPagination.displayName = 'TPagination';


export default TPagination;
