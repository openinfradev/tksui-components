import {render, screen} from '@testing-library/react';
import TFormSectionRow from '~/data-container/form-section/TFormSectionRow';

describe('TFormSectionRow', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TFormSectionRow className={'class-name-prop'}>content</TFormSectionRow>);
            const root = screen.getByText('content');

            // Assert

            expect(root)
                .toHaveClass('class-name-prop');

        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TFormSectionRow style={{width: '100%'}}>content</TFormSectionRow>);
            const root = screen.getByText('content');

            // Assert
            expect(root)
                .toHaveStyle({width: '100%'});
        });
    });
});
