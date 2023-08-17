import {CSSProperties, useCallback, useMemo} from 'react';
import TButton from '~/tks/component/button/button/TButton';
import {TSearchBoxContextInterface, TSearchBoxProps} from '~/tks/component/data-container/search-box/TSearchBox.interface';
import TSearchBoxContext from '~/tks/component/data-container/search-box/TSearchBoxContext';


function TSearchBox(props: TSearchBoxProps) {

    // region [Hooks]

    const searchBoxContext: TSearchBoxContextInterface = {column: props.column, labelWidth: props.labelWidth};

    // endregion


    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);

        return clazz.join(' ');
    }, [props.className]);

    const rootStyle: CSSProperties = useMemo(() => {
        let style: CSSProperties = {};

        if (props.style) style = {...props.style};

        return style;
    }, [props.style]);

    // endregion

    // region [Events]

    const onSearch = useCallback(() => {
        props.onSearch();
    }, [props]);

    const onReset = useCallback(() => {
        props.onReset();
    }, [props]);

    // endregion


    // region [Templates]

    return (
        <fieldset role={'form'}
                  className={`t-search-box ${rootClass}`}
                  style={rootStyle}>
            <legend className={'screen-reader-only'}>검색 조건</legend>

            <div className={'t-search-box__content'}>
                <TSearchBoxContext.Provider value={{...searchBoxContext}}>
                    {props.children}
                </TSearchBoxContext.Provider>
            </div>

            {
                (props.onReset || props.onSearch) && (
                    <div className={'t-search-box__action-bar'}>
                        {props.onReset && (<TButton large primary onClick={onReset}>초기화</TButton>)}
                        {props.onSearch && (<TButton large main onClick={onSearch}>조회</TButton>)}
                    </div>
                )
            }

        </fieldset>
    );

    // endregion


}

TSearchBox.defaultProps = {
    column: 2,
    labelWidth: '15%',
};

export default TSearchBox;
