import type {ReactNode} from 'react';

import type {THighlightTextProps} from '@/components';

function THighlightText(props: THighlightTextProps) {
    // region [ETCs]

    function parseHighlightedText(): ReactNode {
        const keyword = props.keyword.toLowerCase();

        if (keyword !== '' && props.children.toString().toLowerCase().includes(keyword)) {
            const escapedKeyword = keyword.replaceAll('(', '\\(').replaceAll(')', '\\)');

            const tokens = props.children.toString().split(new RegExp(`(${escapedKeyword})`, 'gi'));

            return (
                <div data-testid={'highlighted-text-root'}>
                    {tokens.map((token: string, index: number) =>
                        token.toLowerCase() === keyword ? <mark key={index}>{token}</mark> : token
                    )}
                </div>
            );
        }

        return <span>{props.children}</span>;
    }

    // endregion

    // region [Templates]

    return parseHighlightedText();

    // endregion
}

export default THighlightText;
