import {render, screen} from '@testing-library/react';
import TSearchBoxRow from '~/tks/component/data-container/search-box/TSearchBoxRow';


describe('TSearchBoxRow', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TSearchBoxRow className={'class-name-prop'}>content</TSearchBoxRow>);
            const root = screen.getByText('content');

            // Assert

            expect(root)
                .toHaveClass('class-name-prop');

        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TSearchBoxRow style={{width: '100%'}}>content</TSearchBoxRow>);
            const root = screen.getByText('content');

            // Assert
            expect(root)
                .toHaveStyle({width: '100%'});
        });
    });
});
