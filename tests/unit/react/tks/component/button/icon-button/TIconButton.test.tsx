import {act, render, screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TIconButton from '~/button/icon-button/TIconButton';
import {useState} from 'react';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TIconButton', () => {

    const mockOnClick = jest.fn();
    const baseProps = {
        children: 'icon',
        onClick: mockOnClick,
    };

    beforeEach(() => {
        mockOnClick.mockClear();
    });

    describe('Render', () => {

        it('Renders without errors', () => {

            // Arrange
            render(<TIconButton {...baseProps}>Test IconButton</TIconButton>);

            // Assert
            expect(screen.getByRole('button')).toBeInTheDocument();
        });

    });


    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testClass = 'test-class';
            render(<TIconButton {...baseProps} className={testClass}>Test IconButton</TIconButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveClass(testClass);
        });

        it('Style prop applies to root', () => {

            // Arrange
            const testStyle = {border: '1px solid blue'};
            render(<TIconButton {...baseProps} style={testStyle}>Test IconButton</TIconButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('ID prop applies to root', () => {

            // Arrange
            const testId = 'test-id';
            render(<TIconButton {...baseProps} id={testId}>Test IconButton</TIconButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveAttribute('id', testId);
        });

        it('Shape class applies to root', () => {

            // Arrange
            render(<TIconButton {...baseProps} shape={'circle'}>Test IconButton</TIconButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveClass('t-icon-button--shape-circle');
        });

        it('Outline class applies to root', () => {

            // Arrange
            render(<TIconButton {...baseProps} outline={'elevation'}>Test IconButton</TIconButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveClass('t-icon-button--outline-elevation');
        });

        it('Disabled class applies to root if disabled', () => {

            // Arrange
            render(<TIconButton {...baseProps} disabled>Test IconButton</TIconButton>);
            const root = screen.getByRole('button');

            // Assert
            expect(root).toHaveClass('t-icon-button--disabled');
        });
    });

    describe('onClick & disabled', () => {

        it('When button is clicked, onClick event handler will be executed', async () => {

            // Arrange
            const user = userEvent.setup();
            const TIconButtonWithClickHandler = () => {
                const [isClicked, setIsClicked] = useState<boolean>(false);
                return <TIconButton onClick={() => setIsClicked(true)}>{isClicked.toString()}</TIconButton>;
            };
            render(<TIconButtonWithClickHandler/>);
            const root = screen.getByRole('button');

            // Assert
            let buttonContent = within(root).queryByText('false');
            expect(buttonContent).toHaveTextContent('false');

            // Act
            await act(async () => { await user.click(root); });

            // Assert
            buttonContent = within(root).queryByText('true');
            expect(buttonContent).toHaveTextContent('true');
        });

        it('Does not call onClick when clicked if disabled', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<TIconButton {...baseProps} disabled>Test IconButton</TIconButton>);
            const root = screen.getByRole('button');
            await act(async () => {
                await user.click(root);
            })

            // Assert
            expect(mockOnClick).not.toHaveBeenCalled();
        });

        it('When enter key is typed, onClick event handler will be executed', async () => {

            // Arrange
            const user = userEvent.setup();
            const TIconButtonWithClickHandler = () => {
                const [isClicked, setIsClicked] = useState<boolean>(false);
                return <TIconButton onClick={() => setIsClicked(true)}>{isClicked.toString()}</TIconButton>;
            };
            render(<TIconButtonWithClickHandler/>);
            const root = screen.getByRole('button');

            // Assert
            let buttonContent = within(root).queryByText('false');
            expect(buttonContent).toHaveTextContent('false');

            // Act
            await act(async () => { await user.type(root, '{enter}'); });

            // Assert
            buttonContent = within(root).queryByText('true');
            expect(buttonContent).toHaveTextContent('true');
        });

        it('When space key is typed, onClick event handler will be executed', async () => {

            // Arrange
            const user = userEvent.setup();
            const TIconButtonWithClickHandler = () => {
                const [isClicked, setIsClicked] = useState<boolean>(false);
                return <TIconButton onClick={() => setIsClicked(true)}>{isClicked.toString()}</TIconButton>;
            };
            render(<TIconButtonWithClickHandler/>);
            const root = screen.getByRole('button');

            // Assert
            let buttonContent = within(root).queryByText('false');
            expect(buttonContent).toHaveTextContent('false');

            // Act
            await act(async () => { await user.type(root, ' '); });

            // Assert
            buttonContent = within(root).queryByText('true');
            expect(buttonContent).toHaveTextContent('true');
        });

    });
});