import {render, screen} from '@testing-library/react';
import TCardContent from '~/data-container/card/TCardContent';
import TCardHeader from '../../../../../../../src/components/data-container/card/TCardHeader';

describe('TCardContent', () => {

    describe('Style', () => {
        it('renders without errors', () => {

            // Arrange
            render(<TCardContent>Test Content</TCardContent>);

            // Assert
            expect(screen.getByTestId('t-card-content')).toBeInTheDocument();
        });

        it('applies className prop to root', () => {

            // Arrange
            const testClassName = 'test-class';
            render(<TCardContent className={testClassName}>Test Content</TCardContent>);
            const root = screen.getByTestId('card-content-root');

            // Assert
            expect(root).toHaveClass(testClassName);
        });

        it('applies style prop to root', () => {

            // Arrange
            const testStyle = { width: '300px' };
            render(<TCardContent style={testStyle}>Test Content</TCardContent>);
            const root = screen.getByTestId('card-content-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });
    });

    describe('Children', () => {
        it('renders children', () => {

            // Arrange
            const testContent = 'Test Content';
            render(<TCardContent>{testContent}</TCardContent>);
            const root = screen.getByTestId('card-content-root');

            // Assert
            expect(root).toHaveTextContent(testContent);
        });
    });

});