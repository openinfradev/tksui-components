import {render, screen} from '@testing-library/react';
import THighlightText from '~/data-container/highlight-text/THighlightText';

describe('THighlightText', () => {

    describe('Render', () => {
        it('renders without errors', () => {

            // Arrange
            render(<THighlightText keyword="Test Text">Render Test</THighlightText>);


            expect(screen.getByText('Render Test')).toBeInTheDocument();
        });

        it('renders the children with highlighting when a keyword is provided', () => {

            // Arrange
            render(<THighlightText keyword="sample">Sample Text</THighlightText>);
            const highlightedText = screen.getByTestId('highlighted-text-root');

            // Assert
            expect(highlightedText).toBeInTheDocument();
            expect(highlightedText).toContainHTML('<mark>Sample</mark> Text');
        });

        it('correctly handles case-insensitive highlighting', () => {

            // Arrange
            render(<THighlightText keyword="sample">Sample sample</THighlightText>);
            const highlightedText = screen.getByTestId('highlighted-text-root');

            // Assert
            expect(highlightedText).toBeInTheDocument();
            expect(highlightedText.innerHTML).toBe('<mark>Sample</mark> <mark>sample</mark>');
        });

        it('renders the children without highlighting when keyword is not present', () => {

            // Arrange
            render(<THighlightText keyword="noKeyword">Sample Text</THighlightText>);

            // Assert
            expect(screen.getByText('Sample Text')).toBeInTheDocument();
        });

    });
});