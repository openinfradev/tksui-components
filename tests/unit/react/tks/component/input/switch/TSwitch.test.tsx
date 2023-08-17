import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TSwitch from '~/tks/component/input/switch/TSwitch';

describe('TSwitch', () => {
    const mockOnChange = jest.fn();
    const baseProps = {
        value: false,
        onChange: mockOnChange,
        positiveValue: true,
        negativeValue: false,
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    // region [Styles]


    // region [Value Handling]

    it('renders without errors', () => {

        // Arrange
        render(<TSwitch {...baseProps} />);

        // Assert
        expect(screen.getByTestId('t-switch-root')).toBeInTheDocument();
    });

    it('Classname prop applies to root', () => {

        // Arrange
        const classNameProp = 'class-name-prop';
        render(<TSwitch {...baseProps} className={classNameProp}/>);
        const root = screen.getByTestId('t-switch-root');

        // Assert
        expect(root).toHaveClass(classNameProp);
    });

    it('Style prop applies to root', () => {

        // Arrange
        render(<TSwitch {...baseProps} style={{width: '300px'}}/>);
        const root = screen.getByTestId('t-switch-root');

        // Assert
        expect(root).toHaveStyle({width: '300px'});
    });

    it('When disabled prop is applied, root has t-switch--disabled class', () => {

        // Arrange
        render(<TSwitch {...baseProps} disabled/>);
        const root = screen.getByTestId('t-switch-root');

        // Assert
        expect(root).toHaveClass('t-switch--disabled');
    });

    it('When label prop is provided, it is shown', () => {

        // Arrange
        const labelText = 'Switch Label';
        render(<TSwitch {...baseProps} label={labelText}/>);
        const label = screen.getByText(labelText);

        // Assert
        expect(label).toBeInTheDocument();
    });


    it('When value is same with positiveValue, container has t-switch__container--on class', () => {

        // Arrange
        render(<TSwitch {...baseProps} value={true}/>);
        const container = screen.getByTestId('t-switch-container');

        // Assert
        expect(container).toHaveClass('t-switch__container--on');
    });

    it('When value is same with negativeValue, container has t-switch__container--off class', () => {

        // Arrange
        render(<TSwitch {...baseProps} value={false}/>);
        const container = screen.getByTestId('t-switch-container');

        // Assert
        expect(container).toHaveClass('t-switch__container--off');
    });


    it('When clicking the root, onChange handler is called', async () => {

        // Arrange
        render(<TSwitch {...baseProps} />);
        const root = screen.getByTestId('t-switch-root');

        // Act
        await act(async () => {
            await userEvent.click(root);
        });

        // Assert
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(true); // Toggled to the positiveValue
    });

    it('When pressing Enter on the thumb, onChange handler is called', async () => {

        // Arrange
        render(<TSwitch {...baseProps} />);

        // Act
        await act(async () => {
            await userEvent.tab();
            await userEvent.keyboard('{enter}');
        });

        // Assert
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(true);
    });

    it('When pressing Space on the thumb, onChange handler is called', async () => {

        // Arrange
        render(<TSwitch {...baseProps} />);

        // Act
        await act(async () => {
            await userEvent.tab();
            await userEvent.keyboard(' ');
        });

        // Assert
        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(true);
    });


    it('When switch is disabled, pressing Tab should not focus on the thumb', async () => {

        // Arrange
        render(<TSwitch {...baseProps} disabled/>);
        const thumb = screen.getByTestId('t-switch-thumb');

        // Act
        await act(async () => {
            await userEvent.tab();
        });

        // Assert
        expect(thumb).not.toHaveFocus();
    });


    it('When disabled, pressing Enter on the thumb does not trigger onChange', async () => {

        // Arrange
        render(<TSwitch {...baseProps} disabled/>);


        // Act
        await act(async () => {
            await userEvent.tab();
            await userEvent.keyboard('{enter}');
        });

        // Assert
        expect(mockOnChange).toHaveBeenCalledTimes(0);
    });


    // endregion


});
