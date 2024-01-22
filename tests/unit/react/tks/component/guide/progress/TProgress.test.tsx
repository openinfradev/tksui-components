import {render, screen} from '@testing-library/react';
import TProgress from '~/guide/progress/TProgress';
describe('TProgress', () => {

    describe('Style', () => {

        it('Renders without errors', () => {

            // Arrange
            const root = document.createElement('div');
            root.id = 'root';
            document.body.appendChild(root);

            const testData = 'test message';
            render(<TProgress isOpen={true} message={testData}/>);

            const message = screen.getByText(testData);

            // Assert
            expect(message).toBeInTheDocument();

        });

    });

    describe('Content', () => {

        it('When message prop is applied, it should be displayed on message area', () => {

            // Arrange
            const root = document.createElement('div');
            root.id = 'root';
            document.body.appendChild(root);

            const testData = 'test message';

            render(<TProgress isOpen={true} message={testData} />);

            const message = screen.getByText(testData);

            // Assert
            expect(message).toHaveTextContent(testData);

        });

    });

});