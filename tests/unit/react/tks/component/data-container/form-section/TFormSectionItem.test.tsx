import {render, screen} from '@testing-library/react';
import TFormSection from '~/data-container/form-section/TFormSection';
import TFormSectionRow from '~/data-container/form-section/TFormSectionRow';
import TFormSectionItem from '~/data-container/form-section/TFormSectionItem';


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
                </TFormSection>,
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
                </TFormSection>,
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
                </TFormSection>,
            );
            const root = screen.getByText(labelText);

            // Assert
            expect(root)
                .toHaveClass('t-form-section-item__label__text');
        });

        it('When required prop is applied, * mark is displayed', () => {

            // Arrange
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem required>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>,
            );
            const root = screen.getByRole('group');

            // Assert
            expect(root)
                .toHaveClass('t-form-section-item--required');
        });

        it('When span prop is applied, it should be applied on flex to adjust width', () => {

            // Arrange
            const columnCount = 3;
            const spanCount = 2;
            render(
                <TFormSection column={columnCount}>
                    <TFormSectionRow>
                        <TFormSectionItem span={spanCount}>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>,
            );

            const root = screen.getByRole('group');
            // Assert
            expect(root)
                .toHaveStyle({width: `calc(100% / ${columnCount} * ${spanCount})`});

        });

        it('When information prop is applied, it should be displayed on information area', async () => {

            // Arrange
            const infoText = 'Information Content';
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem label={'레이블'} information={infoText}>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>,
            );
            const root = screen.getByRole('img');

            // Assert
            expect(root)
                .toHaveClass('t-form-section-item__label__info-icon');

        });

        it('When labelMarginBottom prop is applied, it should be displayed on label area', () => {

            // Arrange
            const labelMarginBottom = '10px';
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem label={'레이블'} labelMarginBottom={labelMarginBottom}>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>,
            );

            // eslint-disable-next-line testing-library/no-node-access
            const root = screen.getByText('레이블').parentElement;

            // Assert
            expect(root)
                .toHaveStyle({marginBottom: labelMarginBottom});
        });

        it('When contentStyle prop is applied, it should be displayed on label content area', () => {

            // Arrange
            const contentStyle = {fontSize: '1rem'};
            render(
                <TFormSection>
                    <TFormSectionRow>
                        <TFormSectionItem label={'레이블'} contentStyle={contentStyle}>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>,
            );

            const root = screen.getByText('content');

            // Assert
            expect(root).toHaveStyle(contentStyle);

        });


    });
});
