import {render, screen} from '@testing-library/react';
import TCardHeader from '~/data-container/card/TCardHeader';

describe('TCardHeader', () => {
    const baseProps = {
        title: 'Test Title',
        subTitle: 'Test Subtitle',
    };

    describe('Style', () => {
        it('Renders without errors', () => {

            // Arrange
            render(<TCardHeader {...baseProps} />);

            // Assert
            expect(screen.getByTestId('card-header-root')).toBeInTheDocument();
        });

        it('ClassName prop applies to the root', () => {

            // Arrange
            const testClassName = 'test-class';
            render(<TCardHeader {...baseProps} className={testClassName}/>);
            const root = screen.getByTestId('card-header-root');

            // Assert
            expect(root).toHaveClass(testClassName);
        });

        it('Style prop applies to the root', () => {

            // Arrange
            const testStyle = { width: '300px', color: 'red' };
            render(<TCardHeader {...baseProps} style={testStyle}/>);
            const root = screen.getByTestId('card-header-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('ID prop applies to root', () => {

            // Arrange
            const testStyle = { width: '300px', color: 'red' };
            render(<TCardHeader {...baseProps} style={testStyle}/>);
            const root = screen.getByTestId('card-header-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });


        it('Renders title and subTitle correctly', () => {

            // Arrange
            render(<TCardHeader {...baseProps} />);
            const title = screen.getByText('Test Title');
            const subTitle = screen.getByText('Test Subtitle');

            // Assert
            expect(title).toBeInTheDocument();
            expect(subTitle).toBeInTheDocument();
        });
    });
});