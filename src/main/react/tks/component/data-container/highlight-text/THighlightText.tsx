import {THighlightTextProps} from '~/tks/component/data-container/highlight-text/THightlightText.interface';

function THighlightText(props: THighlightTextProps) {
    
    // region [ETCs]
    
    function parseHighlightedText(): JSX.Element {
        const keyword = props.keyword.toLowerCase();
    
        if (keyword !== '' && props.children.toString().toLowerCase().includes(keyword)) {
            const escapedKeyword = keyword
                .replaceAll('(', '\\(')
                .replaceAll(')', '\\)');
            
            const tokens = props.children.toString()
                .split(new RegExp(`(${escapedKeyword})`, 'gi'));

            return (<>
                {
                    tokens.map((token: string, index: number) => (token.toLowerCase() === keyword
                        ? <mark key={index}>{token}</mark>
                        : token
                    ))
                }
            </>);
        }

        return <span>{props.children}</span>;

    }
    
    // endregion
    
    // region [Templates]
    
    return parseHighlightedText();
    
    // endregion
    
    
}

export default THighlightText;
