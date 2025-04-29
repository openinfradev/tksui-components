import {render, screen} from '@testing-library/react';

import {TFormSection} from '@/components';

import TFormSectionItem from '~/data-container/form-section/TFormSectionItem';
import TFormSectionRow from '~/data-container/form-section/TFormSectionRow';

describe('TFormSectionRow', () => {
    describe('Style', () => {
        it('Classname prop applies to root', () => {
            // Arrange
            render(<TFormSectionRow className={'class-name-prop'}>content</TFormSectionRow>);
            const root = screen.getByText('content');

            // Assert

            expect(root).toHaveClass('class-name-prop');
        });

        it('Style prop applies to root', () => {
            // Arrange
            render(<TFormSectionRow style={{width: '100%'}}>content</TFormSectionRow>);
            const root = screen.getByText('content');

            // Assert
            expect(root).toHaveStyle({width: '100%'});
        });

        it('VerticalAlign prop applies to root', () => {
            // Arrange
            const labelText = 'Test Label';

            render(
                <TFormSection>
                    <TFormSectionRow verticalAlign={'top'}>
                        <TFormSectionItem label={labelText}>Content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            );
            const itemRoot = screen.getByText(labelText);

            // Assert
            expect(itemRoot.parentElement).toHaveStyle({alignItems: 'flex-start'});
        });
    });
});
