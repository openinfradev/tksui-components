import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TTextField from '~/input/text-field/TTextField';


describe('TTextField', () => {

    const mockOnChange = jest.fn();
    const baseProps = {value: 'hello', onChange: mockOnChange};

    beforeEach(() => { mockOnChange.mockClear(); });


    // region [Styles]

    it('renders without errors', () => {
        render(<TTextField value={'hello'} onChange={mockOnChange}/>);
        expect(screen.getByTestId('text-field-root')).toBeInTheDocument();
    });

    it('Classname prop applies to root', () => {

        // Arrange
        render(<TTextField {...baseProps} className={'class-name-prop'}/>);

        // Assert
        const root = screen.getByTestId('text-field-root');

        expect(root)
            .toHaveClass('class-name-prop');
    });

    it('Style prop applies to root', () => {

        // Arrange
        render(<TTextField {...baseProps} style={{width: '300px'}}/>);

        // Assert
        const root = screen.getByTestId('text-field-root');

        expect(root).toHaveStyle({width: '300px'});
    });

    it('Width prop applies to root', () => {

        // Arrange
        render(<TTextField {...baseProps} width={'300px'}/>);

        // Assert
        const root = screen.getByTestId('text-field-root');

        expect(root)
            .toHaveStyle({width: '300px'});
    });

    it('Id prop applies to root', () => {

        // Arrange
        const idProp = 'my-id';
        render(<TTextField {...baseProps} id={idProp}/>);

        // Assert
        const root = screen.getByTestId('text-field-root');

        expect(root).toHaveAttribute('id', idProp);
    });

    // endregion


    // region [Label, Required, Placeholder, Disabled, ReadOnly]


    it('When label prop is applies, label is shown', () => {

        // Arrange
        const labelText = 'foo';
        render(<TTextField {...baseProps} label={labelText}/>);

        // Assert
        const label = screen.getByText(labelText);

        expect(label).toBeInTheDocument();
    });

    it('When required prop is applies, label has t-text-field__label--required class', () => {

        // Arrange
        const labelText = 'foo';
        render(<TTextField {...baseProps} label={labelText} required/>);

        // Assert
        const label = screen.getByText(labelText);

        expect(label)
            .toHaveClass('t-text-field__label--required');
    });

    it('When placeholder prop is applies, label has t-text-field__label--required class', () => {

        // Arrange
        const labelText = 'foo';
        render(<TTextField {...baseProps} label={labelText} required/>);

        // Assert
        const label = screen.getByText(labelText);

        expect(label)
            .toHaveClass('t-text-field__label--required');
    });


    it('When disabled prop is applies, root has t-text-field--disabled class', () => {

        // Arrange
        render(<TTextField {...baseProps} disabled/>);

        // Assert
        const root = screen.getByTestId('text-field-root');

        expect(root)
            .toHaveClass('t-text-field--disabled');
    });

    it('When readOnly prop is applies, root has t-text-field--read-only class', () => {

        // Arrange
        render(<TTextField {...baseProps} readOnly/>);

        // Assert
        const root = screen.getByTestId('text-field-root');

        expect(root)
            .toHaveClass('t-text-field--read-only');
    });


    it('When placeholder prop is applies, input has placeholder attribute', () => {

        // Arrange
        const placeholderText = 'foo';
        render(<TTextField {...baseProps} placeholder={placeholderText}/>);

        // Assert
        const inputElement = screen.getByTestId('text-field-input');

        expect(inputElement)
            .toHaveAttribute('placeholder', placeholderText);
    });

    it('When placeholder and disabled props are applied , input has NOT placeholder attribute', () => {

        // Arrange
        const placeholderText = 'foo';
        render(<TTextField {...baseProps} placeholder={placeholderText} disabled/>);

        // Assert
        const inputElement = screen.getByTestId('text-field-input');

        expect(inputElement)
            .not.toHaveAttribute('placeholder', placeholderText);
    });

    it('When placeholder and readOnly props are applied , input has NOT placeholder attribute', () => {

        // Arrange
        const placeholderText = 'foo';
        render(<TTextField {...baseProps} placeholder={placeholderText} readOnly/>);

        // Assert
        const inputElement = screen.getByTestId('text-field-input');

        expect(inputElement)
            .not.toHaveAttribute('placeholder', placeholderText);
    });

    it('When readonly and searchable props are applied , search icon is shown', () => {

        // Arrange
        render(<TTextField {...baseProps} readOnly searchable/>);

        // Assert
        const root = screen.getByTestId('text-field-root');
        const searchIcon = screen.getByLabelText('search');

        expect(root).toHaveClass('t-text-field--read-only');
        expect(searchIcon).toBeInTheDocument();
    });


    // endregion


    // region [Blur, Trim, Counter, Hint]

    it('When noTrim prop is not applied, the input value is not trimmed', async () => {
        // Arrange
        const mockOnBlur = jest.fn();
        render(<TTextField value={' a '} onChange={mockOnChange} onBlur={mockOnBlur}/>);
        const inputElement = screen.getByTestId('text-field-input');

        // Act
        await act(async () => {
            await userEvent.click(inputElement);
        });
        await act(async () => {
            await userEvent.tab();
        });


        // Assert
        expect(mockOnChange).toHaveBeenCalledWith('a');
        expect(mockOnBlur).toBeCalledTimes(1);
    });

    it('When noTrim prop is applied, the input value is trimmed', async () => {
        // Arrange
        const mockOnBlur = jest.fn();
        render(<TTextField noTrim value={' a '} onChange={mockOnChange} onBlur={mockOnBlur}/>);
        const inputElement = screen.getByTestId('text-field-input');

        // Act
        await act(async () => {
            await userEvent.click(inputElement);
        });
        await act(async () => {
            await userEvent.tab();
        });

        // Assert
        expect(mockOnChange).toBeCalledTimes(0);
        expect(mockOnBlur).toBeCalledTimes(1);
    });


    it('When input element has focused, the counter shows the trimmed length and length limit', async () => {
        // Arrange
        const mockOnBlur = jest.fn();
        const value = ' foo ';
        const lengthLimit = 10;
        const trimmedLength = value.trim().length;

        render(<TTextField value={value} onChange={mockOnChange} onBlur={mockOnBlur} counter={lengthLimit}/>);
        const inputElement = screen.getByTestId('text-field-input');

        // Act
        await act(async () => {
            await userEvent.click(inputElement);
        });
        const counterElement = screen.getByTestId('text-field-counter');

        // Assert
        expect(counterElement).toHaveTextContent(`${trimmedLength}/${lengthLimit}`);
    });


    it('When hint prop is applied, the detail message shows the hint', () => {
        // Arrange
        const hintText = 'hint text';


        // Act
        render(<TTextField {...baseProps} hint={hintText}/>);
        const message = screen.getByTestId('text-field-message');

        // Assert
        expect(message).toHaveTextContent(hintText);
    });


    // endregion


    // region [Password, Searchable, AutoComplete]

    it('When password prop is applies, input type is password and password icon is shown', () => {
        // Arrange
        render(<TTextField {...baseProps} password/>);
        const passwordInput = screen.getByTestId('text-field-input');
        const passwordIcon = screen.getByLabelText('visibility');

        // Assert
        expect(passwordInput).toHaveAttribute('type', 'password');
        expect(passwordIcon).toBeInTheDocument();
    });


    it('When click the password icon, it toggles visibility of password', async () => {

        // Arrange
        render(<TTextField {...baseProps} password/>);

        // Act
        let showPasswordIcon = screen.queryByLabelText('visibility');
        let hidePasswordIcon = screen.queryByLabelText('visibility_off');

        expect(showPasswordIcon).toBeInTheDocument();
        expect(hidePasswordIcon).not.toBeInTheDocument();

        await act(async () => {
            await userEvent.click(showPasswordIcon);
        });
        showPasswordIcon = screen.queryByLabelText('visibility');
        hidePasswordIcon = screen.queryByLabelText('visibility_off');

        expect(showPasswordIcon).not.toBeInTheDocument();
        expect(hidePasswordIcon).toBeInTheDocument();

        await act(async () => {
            await userEvent.click(hidePasswordIcon);
        });
        showPasswordIcon = screen.queryByLabelText('visibility');
        hidePasswordIcon = screen.queryByLabelText('visibility_off');

        expect(showPasswordIcon).toBeInTheDocument();
        expect(hidePasswordIcon).not.toBeInTheDocument();
    });

    it('When clearable prop is applies, clear icon is shown', () => {
        // Arrange
        render(<TTextField {...baseProps} clearable/>);
        const clearIcon = screen.getByLabelText('clear');

        // Assert
        expect(clearIcon).toBeInTheDocument();
    });

    it('When click the clear icon, value is cleared', async () => {
        // Arrange
        render(<TTextField {...baseProps} clearable/>);
        const clearIcon = screen.getByLabelText('clear');

        // Act
        await userEvent.click(clearIcon);

        // Assert
        expect(mockOnChange).toHaveBeenCalledWith('');
    });


    it('When searchable prop is applies, search icon is shown', () => {
        // Arrange
        render(<TTextField {...baseProps} searchable/>);
        const searchIcon = screen.getByLabelText('search');

        // Assert
        expect(searchIcon).toBeInTheDocument();
    });

    it('When click the search icon, search handler is called', async () => {
        // Arrange
        const mockOnSearch = jest.fn();
        render(<TTextField {...baseProps} searchable onClickSearch={mockOnSearch}/>);
        const searchIcon = screen.getByLabelText('search');

        // Act
        await userEvent.click(searchIcon);

        // Assert
        expect(mockOnSearch).toHaveBeenCalledTimes(1);
    });

    it('When autoComplete prop is applied, input element has autoComplete attribute', () => {

        // Arrange
        const autoCompleteValue = 'new-password';
        render(<TTextField {...baseProps} password autoComplete={autoCompleteValue}/>);

        // Assert
        const inputElement = screen.getByTestId('text-field-input');

        expect(inputElement)
            .toHaveAttribute('autocomplete', autoCompleteValue);
    });

    // endregion


    // region [Events]

    it('When type enter, onKeyDownEnter handler is called', async () => {

        // Arrange
        const mockOnKeyDownEnter = jest.fn();
        render(<TTextField {...baseProps} password onKeyDownEnter={mockOnKeyDownEnter}/>);

        // Assert
        const inputElement = screen.getByTestId('text-field-input');

        await act(async () => {
            await userEvent.type(inputElement, '{enter}');
        });

        // Assert
        expect(mockOnKeyDownEnter).toBeCalledTimes(1);
    });

    it('When type any key, onKeyDown handler is called', async () => {

        // Arrange
        const mockOnKeyDown = jest.fn();
        render(<TTextField {...baseProps} password onKeyDown={mockOnKeyDown}/>);

        // Assert
        const inputElement = screen.getByTestId('text-field-input');

        await act(async () => {
            await userEvent.type(inputElement, '1');
        });

        // Assert
        expect(mockOnKeyDown).toBeCalledTimes(1);
    });


    // endregion


});
