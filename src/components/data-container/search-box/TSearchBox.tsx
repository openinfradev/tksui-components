import {CSSProperties, useCallback, useMemo, useState} from 'react';
import TButton from '../../button/button/TButton';
import {TSearchBoxContextInterface, TSearchBoxProps} from './TSearchBox.interface';
import TSearchBoxContext from './TSearchBoxContext';
import {TIcon} from '~/icon';


function TSearchBox(props: TSearchBoxProps) {

    // region [Hooks]

    const searchBoxContext: TSearchBoxContextInterface = {column: props.column, labelWidth: props.labelWidth};

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // endregion


    // region [Styles]

    const rootClass: string = useMemo((): string => {
        const clazz: string[] = [];

        if (props.className) clazz.push(props.className);

        return clazz.join(' ');
    }, [props.className]);

    const expandZoneClass: string = useMemo((): string => {

        if (isExpanded) { return 't-search-box__content__expand-zone--expanded'; }

        return 't-search-box__content__expand-zone--collapsed';
    }, [isExpanded]);

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

    const onClickExpand = useCallback(() => {
        setIsExpanded(!isExpanded);
    }, [isExpanded]);

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
                    {
                        props.expandableZone && (
                            <div className={`t-search-box__content__expand-zone ${expandZoneClass}`}>
                                <div className={'t-search-box__content__expand-zone__content'}>
                                    {isExpanded && props.expandableZone}
                                </div>

                                <div className={'t-search-box__content__expand-zone__panel'}>
                                    <div className={'t-search-box__content__expand-zone__panel__divider'} />
                                    <div className={'t-search-box__content__expand-zone__panel__expand-button-wrapper'}>
                                        <div className={'t-search-box__content__expand-zone__panel__expand-button'} onClick={onClickExpand}>
                                            { isExpanded ? '닫기' : '열기'}
                                            <TIcon>expand_more</TIcon>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )
                    }
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
