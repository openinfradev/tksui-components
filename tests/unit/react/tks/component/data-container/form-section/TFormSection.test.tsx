import {render, screen} from '@testing-library/react';
import TFormSection from '~/data-container/form-section/TFormSection';
import TFormSectionRow from '~/data-container/form-section/TFormSectionRow';
import TFormSectionItem from '~/data-container/form-section/TFormSectionItem';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TFormSection', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TFormSection className={'class-name-prop'}>search box content</TFormSection>);
            const root = screen.getByTestId('t-section-root');

            // Assert

            expect(root)
                .toHaveClass('class-name-prop');

        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TFormSection style={{width: '100%'}}>search box content</TFormSection>);
            const root = screen.getByTestId('t-section-root');

            // Assert

            expect(root)
                .toHaveStyle({width: '100%'});
        });

        it('Column prop applied to TFormSection width', () => {

            // Arrange
            const columnCount = 3;
            render(
                <TFormSection column={columnCount}>
                    <TFormSectionRow>
                        <TFormSectionItem>Form Section Item</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>,
            );

            const searchBoxItem = screen.getByRole('group');

            // Assert

            expect(searchBoxItem)
                .toHaveStyle({width: `calc(100% / ${columnCount} * 1)`});
        });

        it('When label prop is applied, it should be displayed on label area', () => {

            // Arrange
            const labelText = '레이블';
            render(<TFormSection label={labelText}>form section content</TFormSection>);
            const root = screen.getByText(labelText);

            // Assert

            expect(root)
                .toHaveClass('t-section__header__label');
        });

        it('When customLabel prop is applied, it should be displayed on label area', () => {

            // Arrange
            const labelText = '커스텀 레이블';
            render(<TFormSection customLabel={<>{labelText}</>}>form section content</TFormSection>);
            const root = screen.getByText(labelText);

            // Assert

            expect(root)
                .toHaveClass('t-section__header__label');
        });

        it('When information prop is applied, it should be displayed on information area', () => {

            // Arrange
            const infoText = 'Information Content';
            render(<TFormSection information={infoText}>form section content</TFormSection>);
            // eslint-disable-next-line testing-library/no-node-access
            const root = screen.getByText(infoText).parentElement;

            // Assert

            expect(root)
                .toHaveClass('t-form-section__content__info__content');
        });

        it('When customInformation prop is applied, it should be displayed on information area', () => {

            // Arrange
            const infoText = 'Custom Information Content';
            render(<TFormSection customInformation={<>{infoText}</>}>form section content</TFormSection>);
            // eslint-disable-next-line testing-library/no-node-access
            const root = screen.getByText(infoText).parentElement;

            // Assert

            expect(root)
                .toHaveClass('t-form-section__content__info');
        });

        it('Apply the LabelWidth prop to adjust the width of the label in TFormSectionItem.', () => {

            // Arrange
            const labelWidth = '120px';
            render(<>
                <TFormSection labelWidth={labelWidth}>
                    <TFormSectionRow>
                        <TFormSectionItem label={'레이블'}>content</TFormSectionItem>
                    </TFormSectionRow>
                </TFormSection>
            </>);

            // eslint-disable-next-line testing-library/no-node-access
            const formSectionItemLabel = screen.getByText('레이블').parentElement;

            // Assert
            expect(formSectionItemLabel)
                .toHaveStyle({minWidth: labelWidth});
        });

    });
});
