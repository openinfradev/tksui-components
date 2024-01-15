import {render, screen} from '@testing-library/react';
import TSection from '~/data-container/section/TSection';


describe('TSection', () => {

    describe('style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TSection className={'class-name-prop'}>section content</TSection>);
            const root = screen.getByTestId('t-section-root');

            // Assert

            expect(root)
                .toHaveClass('class-name-prop');

        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TSection style={{width: '100%'}}>section content</TSection>);
            const root = screen.getByTestId('t-section-root');

            // Assert

            expect(root)
                .toHaveStyle({width: '100%'});
        });

        it('When label prop is applied, it should be displayed on label area', () => {

            // Arrange
            const labelText = '레이블';
            render(<TSection label={labelText}>section content</TSection>);
            const root = screen.getByText(labelText);

            // Assert

            expect(root)
                .toHaveClass('t-section__header__label');
        });

        it('When customLabel prop is applied, it should be displayed on label area', () => {

            // Arrange
            const labelText = '커스텀 레이블';
            render(<TSection label={labelText}>section content</TSection>);
            const root = screen.getByText(labelText);

            // Assert

            expect(root)
                .toHaveClass('t-section__header__label');
        });

        it('When leftAction prop is applied, it should be displayed on left-action area', () => {

            // Arrange
            const leftActionText = 'Left Action';
            render(<TSection leftAction={<>{leftActionText}</>}>section content</TSection>);
            const root = screen.getByText(leftActionText);

            // Assert

            expect(root)
                .toHaveClass('t-section__header__action__left-action');
        });

        it('When leftAction prop is applied, it should be displayed on left-action area', () => {

            // Arrange
            const rightActionText = 'Right Action';
            render(<TSection rightAction={<>{rightActionText}</>}>section content</TSection>);
            const root = screen.getByText(rightActionText);

            // Assert

            expect(root)
                .toHaveClass('t-section__header__action__right-action');
        });

        it('When children prop is applied, it should be displayed on content area', () => {

            // Arrange
            const contentText = 'TSection Content';
            render(<TSection>{contentText}</TSection>);
            const root = screen.getByText(contentText);

            // Assert

            expect(root)
                .toHaveClass('t-section__content');
        });

    });
});
