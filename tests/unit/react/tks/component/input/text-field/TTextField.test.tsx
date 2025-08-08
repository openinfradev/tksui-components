import {act, render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useRef} from 'react';

import TValidatorRule from '@/common/validator/TValidatorRule';
import type {TTextFieldRef} from '@/components';

import TTextField from '~/input/text-field/TTextField';

describe('TTextField', () => {
    const mockOnChange = jest.fn();
    const baseProps = {
        value: 'hello',
        onChange: mockOnChange,
    };

    beforeEach(() => {
        mockOnChange.mockClear();
    });

    // region [Styles]

    describe('Styles', () => {
        it('renders without errors', () => {
            render(<TTextField value={'hello'} onChange={mockOnChange} />);
            expect(screen.getByTestId('text-field-root')).toBeInTheDocument();
        });

        it('Classname prop applies to root', () => {
            // Arrange
            render(<TTextField {...baseProps} className={'class-name-prop'} />);

            // Assert
            const root = screen.getByTestId('text-field-root');

            expect(root).toHaveClass('class-name-prop');
        });

        it('Style prop applies to root', () => {
            // Arrange
            render(<TTextField {...baseProps} style={{width: '300px'}} />);

            // Assert
            const root = screen.getByTestId('text-field-root');

            expect(root).toHaveStyle({width: '300px'});
        });

        it('Width prop applies to root', () => {
            // Arrange
            render(<TTextField {...baseProps} width={'300px'} />);

            // Assert
            const root = screen.getByTestId('text-field-root');

            expect(root).toHaveStyle({width: '300px'});
        });

        it('Id prop applies to root', () => {
            // Arrange
            const idProp = 'my-id';
            render(<TTextField {...baseProps} id={idProp} />);

            // Assert
            const root = screen.getByTestId('text-field-root');

            expect(root).toHaveAttribute('id', idProp);
        });
    });

    // endregion

    // region [Value, Name]

    describe('Value, Name', () => {
        it('When name prop is applied, it triggers onKeyDown and validates input correctly', async () => {
            // Arrange
            const mockOnKeyDown = jest.fn();

            const {result} = renderHook(() => useRef<TTextFieldRef>(null));
            const textFieldRef = result.current;

            render(
                <TTextField
                    name={'test'}
                    onKeyDown={mockOnKeyDown}
                    ref={textFieldRef}
                    rules={[TValidatorRule.required()]}
                />
            );

            // Assert
            const inputElement = screen.getByTestId('text-field-input');

            await act(async () => {
                await userEvent.type(inputElement, '1');
                textFieldRef.current.validate();
            });

            // Assert
            expect(mockOnKeyDown).toHaveBeenCalledTimes(1);

            expect(textFieldRef.current.getValidateResult()).toBe(true);
        });
    });

    // endregion

    // region [Label, Required, Placeholder, Disabled, ReadOnly, Dense]

    describe('Shape', () => {
        it('When label prop is applies, label is shown', () => {
            // Arrange
            const labelText = 'foo';
            render(<TTextField {...baseProps} label={labelText} />);

            // Assert
            const label = screen.getByText(labelText);

            expect(label).toBeInTheDocument();
        });

        it('When required prop is applies, label has t-text-field__label--required class', () => {
            // Arrange
            const labelText = 'foo';
            render(<TTextField {...baseProps} label={labelText} required />);

            // Assert
            const label = screen.getByText(labelText);

            expect(label).toHaveClass('t-text-field__label--required');
        });

        it('When placeholder prop is applies, label has t-text-field__label--required class', () => {
            // Arrange
            const labelText = 'foo';
            render(<TTextField {...baseProps} label={labelText} required />);

            // Assert
            const label = screen.getByText(labelText);

            expect(label).toHaveClass('t-text-field__label--required');
        });

        it('When disabled prop is applies, root has t-text-field--disabled class', () => {
            // Arrange
            render(<TTextField {...baseProps} disabled />);

            // Assert
            const root = screen.getByTestId('text-field-root');

            expect(root).toHaveClass('t-text-field--disabled');
        });

        it('When readOnly prop is applies, root has t-text-field--read-only class', () => {
            // Arrange
            render(<TTextField {...baseProps} readOnly />);

            // Assert
            const root = screen.getByTestId('text-field-root');

            expect(root).toHaveClass('t-text-field--read-only');
        });

        it('When dense prop is applies, root has t-text-field--dense class', () => {
            // Arrange
            render(<TTextField {...baseProps} dense />);

            // Assert
            const root = screen.getByTestId('text-field-root');

            expect(root).toHaveClass('t-text-field--dense');
        });

        it('When placeholder prop is applies, input has placeholder attribute', () => {
            // Arrange
            const placeholderText = 'foo';
            render(<TTextField {...baseProps} placeholder={placeholderText} />);

            // Assert
            const inputElement = screen.getByTestId('text-field-input');

            expect(inputElement).toHaveAttribute('placeholder', placeholderText);
        });

        it('When placeholder and disabled props are applied , input has NOT placeholder attribute', () => {
            // Arrange
            const placeholderText = 'foo';
            render(<TTextField {...baseProps} placeholder={placeholderText} disabled />);

            // Assert
            const inputElement = screen.getByTestId('text-field-input');

            expect(inputElement).not.toHaveAttribute('placeholder', placeholderText);
        });

        it('When placeholder and readOnly props are applied , input has NOT placeholder attribute', () => {
            // Arrange
            const placeholderText = 'foo';
            render(<TTextField {...baseProps} placeholder={placeholderText} readOnly />);

            // Assert
            const inputElement = screen.getByTestId('text-field-input');

            expect(inputElement).not.toHaveAttribute('placeholder', placeholderText);
        });

        it('When readonly and searchable props are applied , search icon is shown', () => {
            // Arrange
            render(<TTextField {...baseProps} readOnly searchable />);

            // Assert
            const root = screen.getByTestId('text-field-root');
            const searchIcon = screen.getByLabelText('search');

            expect(root).toHaveClass('t-text-field--read-only');
            expect(searchIcon).toBeInTheDocument();
        });
    });

    // endregion

    // region [Blur, Trim, Counter, Hint]

    describe('Blur, Trim, Counter, Hint', () => {
        it('When noTrim prop is not applied, the input value is not trimmed', async () => {
            // Arrange
            const mockOnBlur = jest.fn();
            render(<TTextField value={' a '} onChange={mockOnChange} onBlur={mockOnBlur} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act
            await userEvent.click(inputElement);
            await userEvent.tab();

            // Assert
            expect(mockOnChange).toHaveBeenCalledWith('a');
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it('When noTrim prop is applied, the input value is trimmed', async () => {
            // Arrange
            const mockOnBlur = jest.fn();
            render(<TTextField noTrim value={' a '} onChange={mockOnChange} onBlur={mockOnBlur} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act
            await userEvent.click(inputElement);
            await userEvent.tab();

            // Assert
            expect(mockOnChange).toHaveBeenCalledTimes(0);
            expect(mockOnBlur).toHaveBeenCalledTimes(1);
        });

        it('When typing, spaces should be allowed during input', async () => {
            // Arrange
            render(<TTextField value={''} onChange={mockOnChange} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act
            await userEvent.type(inputElement, 'hello world');

            // Assert
            expect(mockOnChange).toHaveBeenCalledWith('hello world');
        });

        it('When typing spaces only, input should allow spaces during typing but trim on blur', async () => {
            // Arrange
            render(<TTextField value={''} onChange={mockOnChange} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act - Type spaces
            await userEvent.type(inputElement, '   ');
            expect(mockOnChange).toHaveBeenLastCalledWith('   ');

            // Act - Blur to trigger trim
            await userEvent.tab();

            // Assert - Should be trimmed to empty string on blur
            expect(mockOnChange).toHaveBeenLastCalledWith('');
        });

        it('When typing text with leading/trailing spaces, should allow during input but trim on blur', async () => {
            // Arrange
            render(<TTextField value={''} onChange={mockOnChange} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act - Type text with spaces
            await userEvent.type(inputElement, '  hello world  ');
            expect(mockOnChange).toHaveBeenLastCalledWith('  hello world  ');

            // Act - Blur to trigger trim
            await userEvent.tab();

            // Assert - Should be trimmed on blur
            expect(mockOnChange).toHaveBeenLastCalledWith('hello world');
        });

        it('When noTrim is true, spaces should not be trimmed even on blur', async () => {
            // Arrange
            render(<TTextField noTrim value={''} onChange={mockOnChange} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act - Type text with spaces
            await userEvent.type(inputElement, '  hello world  ');
            expect(mockOnChange).toHaveBeenLastCalledWith('  hello world  ');

            // Act - Blur should not trigger trim when noTrim is true
            await userEvent.tab();

            // Assert - Should not be trimmed
            expect(mockOnChange).toHaveBeenLastCalledWith('  hello world  ');
        });

        it('When counter is set, input should not exceed the limit', async () => {
            // Arrange
            render(<TTextField value={''} onChange={mockOnChange} counter={5} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act - Try to type more than counter limit
            await userEvent.type(inputElement, 'hello world');

            // Assert - Should be truncated to counter limit
            expect(mockOnChange).toHaveBeenLastCalledWith('hello');
        });

        it('When counter is set with spaces, should count all characters including spaces', async () => {
            // Arrange
            render(<TTextField value={''} onChange={mockOnChange} counter={7} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act - Type text with spaces within limit
            await userEvent.type(inputElement, 'hi bye');

            // Assert - Should allow exactly 6 characters (including space)
            expect(mockOnChange).toHaveBeenLastCalledWith('hi bye');

            // Act - Try to add one more character
            await userEvent.type(inputElement, '!');

            // Assert - Should be truncated to counter limit
            expect(mockOnChange).toHaveBeenLastCalledWith('hi bye!');
        });

        it('When input element has focused, the counter shows the trimmed length and length limit', async () => {
            // Arrange
            const mockOnBlur = jest.fn();
            const value = ' foo ';
            const lengthLimit = 10;
            const trimmedLength = value.trim().length;

            render(<TTextField value={value} onChange={mockOnChange} onBlur={mockOnBlur} counter={lengthLimit} />);
            const inputElement = screen.getByTestId('text-field-input');

            // Act
            await userEvent.click(inputElement);
            const counterElement = screen.getByTestId('text-field-counter');

            // Assert
            expect(counterElement).toHaveTextContent(`${trimmedLength}/${lengthLimit}`);
        });

        it('When textarea element has focused, the counter shows the trimmed length and length limit', async () => {
            // Arrange
            const mockOnBlur = jest.fn();
            const value = ' foo ';
            const lengthLimit = 10;
            const trimmedLength = value.trim().length;

            render(
                <TTextField
                    value={value}
                    multiline
                    rows={3}
                    onChange={mockOnChange}
                    onBlur={mockOnBlur}
                    counter={lengthLimit}
                />
            );
            const textareaElement = screen.getByTestId('text-field-text-area');

            // Act
            await userEvent.click(textareaElement);
            const counterElement = screen.getByTestId('text-area-counter');

            // Assert
            expect(counterElement).toHaveTextContent(`${trimmedLength}/${lengthLimit}`);
        });

        it('When hint prop is applied, the detail message shows the hint', () => {
            // Arrange
            const hintText = 'hint text';

            // Act
            render(<TTextField {...baseProps} hint={hintText} />);
            const message = screen.getByTestId('text-field-message');

            // Assert
            expect(message).toHaveTextContent(hintText);
        });
    });

    // endregion

    // region [Password, Searchable, AutoComplete, customAction]

    describe('Password, Searchable, AutoComplete, customAction', () => {
        it('When password prop is applies, input type is password and password icon is shown', () => {
            // Arrange
            render(<TTextField {...baseProps} password />);
            const passwordInput = screen.getByTestId('text-field-input');
            const passwordIcon = screen.getByLabelText('visibility');

            // Assert
            expect(passwordInput).toHaveAttribute('type', 'password');
            expect(passwordIcon).toBeInTheDocument();
        });

        it('When click the password icon, it toggles visibility of password', async () => {
            // Arrange
            render(<TTextField {...baseProps} password />);

            // Act
            let showPasswordIcon = screen.queryByLabelText('visibility');
            let hidePasswordIcon = screen.queryByLabelText('visibility_off');

            expect(showPasswordIcon).toBeInTheDocument();
            expect(hidePasswordIcon).not.toBeInTheDocument();

            await userEvent.click(showPasswordIcon);
            showPasswordIcon = screen.queryByLabelText('visibility');
            hidePasswordIcon = screen.queryByLabelText('visibility_off');

            expect(showPasswordIcon).not.toBeInTheDocument();
            expect(hidePasswordIcon).toBeInTheDocument();

            await userEvent.click(hidePasswordIcon);
            showPasswordIcon = screen.queryByLabelText('visibility');
            hidePasswordIcon = screen.queryByLabelText('visibility_off');

            expect(showPasswordIcon).toBeInTheDocument();
            expect(hidePasswordIcon).not.toBeInTheDocument();
        });

        it('When clearable prop is applies, clear icon is shown', () => {
            // Arrange
            render(<TTextField value={'hello'} onChange={mockOnChange} clearable />);
            const clearIcon = screen.getByLabelText('clear');

            // Assert
            expect(clearIcon).toBeInTheDocument();
        });

        it('When clearable prop is applied but value is empty, clear icon is not shown', () => {
            // Arrange
            render(<TTextField value={''} onChange={mockOnChange} clearable />);
            const clearIcon = screen.queryByLabelText('clear');

            // Assert
            expect(clearIcon).not.toBeInTheDocument();
        });

        it('When click the clear icon, value is cleared and innerValue is reset', async () => {
            // Arrange
            render(<TTextField value={'hello'} onChange={mockOnChange} clearable />);
            const clearIcon = screen.getByLabelText('clear');
            const inputElement = screen.getByTestId('text-field-input');

            // Act
            await userEvent.click(clearIcon);

            // Assert
            expect(mockOnChange).toHaveBeenCalledWith('');
            expect(inputElement).toHaveValue('');
        });

        it('When searchable prop is applies, search icon is shown', () => {
            // Arrange
            render(<TTextField {...baseProps} searchable />);
            const searchIcon = screen.getByLabelText('search');

            // Assert
            expect(searchIcon).toBeInTheDocument();
        });

        it('When click the search icon, search handler is called', async () => {
            // Arrange
            const mockOnSearch = jest.fn();
            render(<TTextField {...baseProps} searchable onClickSearch={mockOnSearch} />);
            const searchIcon = screen.getByLabelText('search');

            // Act
            await userEvent.click(searchIcon);

            // Assert
            expect(mockOnSearch).toHaveBeenCalledTimes(1);
        });

        it('When autoComplete prop is applied, input element has autoComplete attribute', () => {
            // Arrange
            const autoCompleteValue = 'new-password';
            render(<TTextField {...baseProps} password autoComplete={autoCompleteValue} />);

            // Assert
            const inputElement = screen.getByTestId('text-field-input');

            expect(inputElement).toHaveAttribute('autocomplete', autoCompleteValue);
        });

        it('When customAction prop is applied, input element has customAction attribute', () => {
            // Arrange
            const customTestId = 'custom-action';
            const CustomActionComponent = () => <div data-testid={customTestId}>Custom</div>;
            render(<TTextField {...baseProps} customAction={<CustomActionComponent />} />);

            // Assert
            const customActionRoot = screen.getByTestId(customTestId);

            expect(customActionRoot).toBeInTheDocument();
        });
    });

    // endregion

    // region [Events]

    describe('Events', () => {
        it('When type enter, onKeyDownEnter handler is called', async () => {
            // Arrange
            const mockOnKeyDownEnter = jest.fn();
            render(<TTextField {...baseProps} password onKeyDownEnter={mockOnKeyDownEnter} />);

            // Assert
            const inputElement = screen.getByTestId('text-field-input');

            await userEvent.type(inputElement, '{enter}');

            // Assert
            expect(mockOnKeyDownEnter).toHaveBeenCalledTimes(1);
        });

        it('When type any key, onKeyDown handler is called', async () => {
            // Arrange
            const mockOnKeyDown = jest.fn();
            render(<TTextField {...baseProps} password onKeyDown={mockOnKeyDown} />);

            // Assert
            const inputElement = screen.getByTestId('text-field-input');

            await userEvent.type(inputElement, '1');

            // Assert
            expect(mockOnKeyDown).toHaveBeenCalledTimes(1);
        });
    });

    // endregion
});
