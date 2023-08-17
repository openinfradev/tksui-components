import {render, screen} from '@testing-library/react';
import TSearchBoxItem from '~/tks/component/data-container/search-box/TSearchBoxItem';
import TSearchBox from '~/tks/component/data-container/search-box/TSearchBox';
import TSearchBoxRow from '~/tks/component/data-container/search-box/TSearchBoxRow';


// span?: number,

describe('TSearchBoxItem', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TSearchBoxItem className={'class-name-prop'}>content</TSearchBoxItem>);
            const root = screen.getByRole('group');

            // Assert

            expect(root)
                .toHaveClass('class-name-prop');

        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TSearchBoxItem style={{width: '100%'}}>content</TSearchBoxItem>);
            const root = screen.getByRole('group');

            // Assert
            expect(root)
                .toHaveStyle({width: '100%'});
        });


        it('When required prop is applied, * mark is displayed', () => {

            // Arrange
            render(<TSearchBoxItem required>content</TSearchBoxItem>);
            const root = screen.getByRole('group');

            // Assert
            expect(root)
                .toHaveClass('t-search-box-item--required');
        });

        it('When label prop is applied, it should be displayed on label area', () => {

            // Arrange
            const labelText = '레이블';
            render(<TSearchBoxItem label={labelText}>content</TSearchBoxItem>);
            const root = screen.getByText(labelText);

            // Assert
            expect(root)
                .toHaveClass('t-search-box-item__label');
        });

        it('When span prop is applied, it should be applied on flex to adjust width', () => {

            // Arrange
            const columnCount = 3;
            const spanCount = 2;
            render(<>
                <TSearchBox column={columnCount}>
                    <TSearchBoxRow>
                        <TSearchBoxItem span={spanCount}>content</TSearchBoxItem>);
                    </TSearchBoxRow>
                </TSearchBox>
            </>);

            const root = screen.getByRole('group');

            // Assert
            expect(root)
                .toHaveStyle({width: `calc(100% / ${columnCount} * ${spanCount})`});
        });

    });
});
