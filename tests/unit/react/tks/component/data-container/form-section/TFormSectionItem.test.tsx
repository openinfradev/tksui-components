import {render, screen} from '@testing-library/react';

import TFormSection from '~/data-container/form-section/TFormSection';
import TFormSectionItem from '~/data-container/form-section/TFormSectionItem';
import TFormSectionRow from '~/data-container/form-section/TFormSectionRow';

// span?: number,

describe('TFormSectionItem', () => {
    describe('Style', () => {
        it('Classname prop applies to root', () => {
            // Arrange
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem className={'class-name-prop'}>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            );
            const root = screen.getByRole('group');

            // Assert

            expect(root).toHaveClass('class-name-prop');
        });

        it('Style prop applies to root', () => {
            // Arrange
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem style={{fontSize: '1rem'}}>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            );
            const root = screen.getByRole('group');

            // Assert
            expect(root).toHaveStyle({fontSize: '1rem'});
        });

        it('When label prop is applied, it should be displayed on label area', () => {
            // Arrange
            const labelText = '레이블';
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem label={labelText}>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            );
            const root = screen.getByText(labelText);

            // Assert
            expect(root).toHaveClass('t-form-section-item__label__text');
        });

        it('When required prop is applied, * mark is displayed', () => {
            // Arrange
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem required>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            );
            const root = screen.getByRole('group');

            // Assert
            expect(root).toHaveClass('t-form-section-item--required');
        });

        it('When information prop is applied, it should be displayed on information area', async () => {
            // Arrange
            const infoText = 'Information Content';
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem label={'레이블'} information={infoText}>
                            content
                        </TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            );
            const root = screen.getByRole('img');

            // Assert
            expect(root).toHaveClass('t-form-section-item__label__info-icon');
        });

        it('When contentStyle prop is applied, it should be displayed on label content area', () => {
            // Arrange
            const contentStyle = {fontSize: '1rem'};
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem label={'레이블'} contentStyle={contentStyle}>
                            content
                        </TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            );

            const root = screen.getByText('content');

            // Assert
            expect(root).toHaveStyle(contentStyle);
        });
    });
});
