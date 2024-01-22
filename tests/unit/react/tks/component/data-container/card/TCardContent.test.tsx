import {render, screen} from '@testing-library/react';
import TCardContent from '~/data-container/card/TCardContent';

describe('TCardContent', () => {

    describe('Style', () => {
        it('Renders without errors', () => {

            // Arrange
            render(<TCardContent>Test Content</TCardContent>);

            // Assert
            expect(screen.getByTestId('card-content-root')).toBeInTheDocument();
        });

        it('Classname prop applies to root', () => {

            // Arrange
            const testClassName = 'test-class';
            render(<TCardContent className={testClassName}>Test Content</TCardContent>);
            const root = screen.getByTestId('card-content-root');

            // Assert
            expect(root).toHaveClass(testClassName);
        });

        it('Style prop applies to root', () => {

            // Arrange
            const testStyle = { width: '300px' };
            render(<TCardContent style={testStyle}>Test Content</TCardContent>);
            const root = screen.getByTestId('card-content-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';

            render(<TCardContent id={testData}>Test Content</TCardContent>);

            const root = screen.getByTestId('card-content-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);

        });
    });

    describe('Children', () => {

        it('Renders children without error', () => {

            // Arrange
            const testContent = 'Test Content';
            render(<TCardContent>{testContent}</TCardContent>);
            const root = screen.getByTestId('card-content-root');

            // Assert
            expect(root).toHaveTextContent(testContent);
        });

    });

});