import {act, render, screen} from '@testing-library/react';
import TTextArea from '~/input/text-area/TTextArea';
import userEvent from '@testing-library/user-event';
import rule from '@/common/validator/TValidatorRule';
import {createRef} from 'react';
import {TTextAreaRef} from '@/components';

describe('TTextArea', () => {

    const mockOnChange = jest.fn();
    const mockOnKeyDown = jest.fn();
    const mockOnKeyEnter = jest.fn();

    beforeEach(() => {
        mockOnChange.mockClear();
        mockOnKeyDown.mockClear();
        mockOnKeyEnter.mockClear();
    });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';
            const testValue = 'test-value';

            render(<TTextArea className={testData} onChange={mockOnChange} value={testValue}/>);

            const root = screen.getByTestId('t-text-area-root');

            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};
            const testValue = 'test-value';

            render(<TTextArea style={testData} onChange={mockOnChange} value={testValue}/>);

            const root = screen.getByTestId('t-text-area-root');

            // Assert
            expect(root).toHaveStyle(testData);

        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';
            const testValue = 'test-value';

            render(<TTextArea id={testData} onChange={mockOnChange} value={testValue}/>);

            const root = screen.getByTestId('t-text-area-root');

            // Assert
            expect(root).toHaveAttribute('id',testData);

        });

        it('When type prop is set to underline, root has t-text-area--underline class', () => {

            // Arrange
            const testValue = 'test-value';

            render(<TTextArea type={'underline'} onChange={mockOnChange} value={testValue}/>);

            const root = screen.getByTestId('t-text-area-root');

            // Assert
            expect(root).toHaveClass('t-text-area--underline');

        });

        it('When disabled prop is applied, root has t-text-area--disabled class', () => {

            // Arrange
            const testValue = 'test-value';

            render(<TTextArea disabled onChange={mockOnChange} value={testValue}/>);

            const root = screen.getByTestId('t-text-area-root');

            // Assert
            expect(root).toHaveClass('t-text-area--disabled');

        });

        it('When disabled prop is applied, the textArea has t-text-area__container__input--disabled class', () => {

            // Arrange
            const testValue = 'test-value';

            render(<TTextArea disabled onChange={mockOnChange} value={testValue}/>);

            const textArea = screen.getByDisplayValue(testValue);

            // Assert
            expect(textArea).toHaveClass('t-text-area__container__input--disabled');

        });

        it('When disabled prop is applied, root will be applied -1 to tabIndex', () => {

            // Arrange
            const testValue = 'test-value';

            render(<TTextArea disabled onChange={mockOnChange} value={testValue}/>);

            const textArea = screen.getByDisplayValue(testValue);

            // Assert
            expect(textArea).toHaveAttribute('tabIndex','-1');

        });

        it('When required prop is applied, the label has t-text-area__label--required class', () => {

            // Arrange
            const testLabel = 'test-label'
            const testValue = 'test-value';

            render(<TTextArea required label={testLabel} onChange={mockOnChange} value={testValue}/>);

            const label = screen.getByText(testLabel);

            // Assert
            expect(label).toHaveClass('t-text-area__label--required');

        });

        it('When value is an invalid, root has t-text-area--failure class', () => {

            // Arrange
            const testData = 'test success message';
            const testPlaceholder = 'test-placeholder';

            const textAreaRef = createRef<TTextAreaRef>();

            render(
                <TTextArea ref={textAreaRef}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={'12345'}
                           successMessage={testData}
                           rules={[rule.lengthBetween(1, 3)]}/>
            );

            const root = screen.getByTestId('t-text-area-root');

            // Act
            act(() => {
                textAreaRef.current.validate();
            });

            // Assert
            expect(root).toHaveClass('t-text-area--failure');

        });

        it('When value is an valid, root has t-text-area--success class', () => {

            // Arrange
            const testData = 'test success message';
            const testPlaceholder = 'test-placeholder';

            const textAreaRef = createRef<TTextAreaRef>();

            render(
                <TTextArea ref={textAreaRef}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={'12345'}
                           successMessage={testData}
                           rules={[rule.lengthBetween(1, 10)]}/>
            );

            const root = screen.getByTestId('t-text-area-root');

            // Act
            act(() => {
                textAreaRef.current.validate();
            });

            // Assert
            expect(root).toHaveClass('t-text-area--success');

        });

    });

    describe('Handler', () => {

        it('When onfocus handler is triggered, container should have focus', () => {

            // Arrange
            const testData = 'test success message';
            const testPlaceholder = 'test-placeholder';

            const textAreaRef = createRef<TTextAreaRef>();

            render(
                <TTextArea ref={textAreaRef}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={'12345'}
                           successMessage={testData}
                           rules={[rule.lengthBetween(1, 10)]}/>
            );

            const textArea = screen.getByPlaceholderText(testPlaceholder);


            // Act
            act(() => {
                textAreaRef.current.focus();
            });

            // Assert
            expect(textArea).toHaveFocus();

        });

        it('When validate handler is triggered, the validate message should be displayed on message area', () => {

            // Arrange
            const testData = 'test success message';
            const testPlaceholder = 'test-placeholder';

            const textAreaRef = createRef<TTextAreaRef>();

            render(
                <TTextArea ref={textAreaRef}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={'12345'}
                           successMessage={testData}
                           rules={[rule.lengthBetween(1, 10)]}/>
            );

            // Act
            act(() => {
                textAreaRef.current.validate();
            });

            // Arrange
            const message = screen.queryByText(testData);

            // Assert
            expect(message).toBeInTheDocument();

        });

    });

    describe('Event', () => {

        it('When disabled prop is applied, the textarea does not accept any input', async () => {

            // Arrange
            const testData = 'test input';
            const testValue = 'test-value';

            const user = userEvent.setup();

            render(<TTextArea disabled onChange={mockOnChange} value={testValue} />);

            const textArea = screen.getByText(testValue);

            // Act
            await user.type(textArea, testData);

            // Assert
            expect(mockOnChange).toHaveBeenCalledTimes(0);

        });

        it('When disabled prop is applied, the textarea has disabled attribute', () => {

            // Arrange
            const testValue = 'test-value';

            render(<TTextArea disabled onChange={mockOnChange} value={testValue}/>);

            const textArea = screen.getByDisplayValue('test-value');

            // Assert
            expect(textArea).toBeDisabled();

        });

        it('When counter prop is applied, the textarea value has length limit', async () => {

            // Arrange
            let testData = '12345';
            const testPlaceholder = 'test-placeholder';

            const user = userEvent.setup();

            render(
                <TTextArea counter={5}
                           onChange={(value)=> {
                               testData = value
                           }}
                           placeholder={testPlaceholder}
                           value={testData} />
            );

            const textArea = screen.getByPlaceholderText(testPlaceholder);

            // Act
            await user.type(textArea, '6');

            // Assert
            expect(testData).toBe('12345');
        });

        it('When focussing, validate message should be clear', () => {

            // Arrange
            const testData = 'test success message';
            const testPlaceholder = 'test-placeholder';

            const textAreaRef = createRef<TTextAreaRef>();

            render(
                <TTextArea ref={textAreaRef}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={'12345'}
                           successMessage={testData}
                           rules={[rule.lengthBetween(1, 10)]}/>
            );

            const textArea = screen.getByPlaceholderText(testPlaceholder);

            // Act
            act(() => {
                textAreaRef.current.validate();
                textArea.focus();
            })

            // Arrange
            const message = screen.queryByText(testData);

            // Assert
            expect(textArea).toHaveFocus();
            expect(message).not.toBeInTheDocument();

        });

        it('When lazy prop false and focus out, validate message should be displayed on message area', async () => {

            // Arrange
            const testData = 'test success message';
            const testPlaceholder = 'test-placeholder';

            const textAreaRef = createRef<TTextAreaRef>();

            const user = userEvent.setup();

            render(
                <TTextArea ref={textAreaRef}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={'12345'}
                           successMessage={testData}
                           lazy={false}
                           rules={[rule.lengthBetween(1, 10)]}/>
            );

            const textArea = screen.getByPlaceholderText(testPlaceholder);

            // Act
            act(() => {
                textArea.focus();
            })

            await user.click(document.body);

            // Arrange
            const message = screen.queryByText(testData);

            // Assert
            expect(textArea).not.toHaveFocus();
            expect(message).toBeInTheDocument();

        });

        it('When value is changed, onChange handler is called', async () => {

            // Arrange
            const testValue = 'test-value';

            const user = userEvent.setup();

            render(<TTextArea onChange={mockOnChange} value={testValue} />);

            const textArea = screen.getByText(testValue);

            // Act
            await user.type(textArea, '12345');

            // Assert
            expect(mockOnChange).toHaveBeenCalledTimes(5);

        });


        it('When keydown event is triggered, onKeyDown handler is called', async () => {

            // Arrange
            const testValue = 'test-value';

            const user = userEvent.setup();

            render(<TTextArea onChange={mockOnChange} onKeyDown={mockOnKeyDown} value={testValue} />);

            const textArea = screen.getByText(testValue);

            // Act
            await user.type(textArea, 'a');

            // Assert
            expect(mockOnKeyDown).toHaveBeenCalledTimes(1);

        });

        it('When pressing Enter on the thumb, onKeyDownEnter handler is called', async () => {

            // Arrange
            const testValue = 'test-value';

            const user = userEvent.setup();

            render(<TTextArea onChange={mockOnChange} onKeyDownEnter={mockOnKeyEnter} value={testValue} />);

            const textArea = screen.getByText(testValue);

            // Act
            await user.type(textArea, '{enter}');

            // Assert
            expect(mockOnKeyEnter).toHaveBeenCalledTimes(1);

        });

    });

    describe('Content', () => {

        it('When rules prop is applied, validate message should be displayed on message area', () => {

            // Arrange
            const testData = 'test error message';
            const testPlaceholder = 'test-placeholder';

            const textAreaRef = createRef<TTextAreaRef>();

            render(
                <TTextArea ref={textAreaRef}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={'12345'}
                           rules={[rule.lengthBetween(1, 3, testData)]}/>
            );

            // Act
            act(() => {
                textAreaRef.current.validate();
            });

            // Arrange
            const message = screen.queryByText(testData);


            // Assert
            expect(message).toHaveTextContent(testData);

        });

        it('When successMessage prop is applied and value is an valid, it should be displayed on content area', () => {

            // Arrange
            const testData = 'test success message';
            const testPlaceholder = 'test-placeholder';

            const textAreaRef = createRef<TTextAreaRef>();

            render(
                <TTextArea ref={textAreaRef}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={'12345'}
                           successMessage={testData}
                           rules={[rule.lengthBetween(1, 10)]}/>
            );

            // Act
            act(() => {
                textAreaRef.current.validate();
            });

            // Arrange
            const message = screen.queryByText(testData);


            // Assert
            expect(message).toHaveTextContent(testData);

        });

        it('When disabled prop is applied, placeholder has empty string', () => {

            // Arrange
            const testValue = 'test-value';
            render(<TTextArea disabled onChange={mockOnChange} value={testValue}/>);

            const textArea = screen.getByDisplayValue('test-value');

            // Assert
            expect(textArea).toHaveAttribute('placeholder','');

        });

        it('When placeholder prop is applied, the textarea has placeholder attribute', async () => {

            // Arrange
            const testData = 'test placeholder';
            const testValue = 'test-value';

            render(<TTextArea placeholder={testData} onChange={mockOnChange} value={testValue}/>);

            const textArea = screen.getByDisplayValue('test-value');

            // Assert
            expect(textArea).toHaveAttribute('placeholder', testData);

        });

        it('When placeholder prop is applied and disabled prop are both applied, the textarea has an empty string as its placeholder attribute', async () => {

            // Arrange
            const testValue = 'test-value';

            render(<TTextArea disabled placeholder={'test placeholder'} onChange={mockOnChange} value={testValue}/>);

            const textArea = screen.getByDisplayValue('test-value');

            // Assert
            expect(textArea).toHaveAttribute('placeholder', '');

        });

        it('When placeholder prop is applied and label prop are both applied, the textarea has an empty string as its placeholder attribute', async () => {

            // Arrange
            const testValue = 'test-value';

            render(<TTextArea label={'test-label'} placeholder={'test placeholder'} onChange={mockOnChange} value={testValue}/>);

            const textArea = screen.getByDisplayValue('test-value');

            // Assert
            expect(textArea).toHaveAttribute('placeholder', '');

        });

        it('When label prop is applied, it should be displayed on label area', () => {

            // Arrange
            const testData = 'test-label';
            const testValue = 'test-value';

            render(<TTextArea label={testData} onChange={mockOnChange} value={testValue}/>);

            const label = screen.getByText(testData);

            // Assert
            expect(label).toHaveTextContent(testData);

        });

        it('When counter prop is applied, it should be displayed on counter area', async () => {

            // Arrange
            const cnt = 10;
            const testValue = '12345';
            const testData = `${testValue.length} / ${cnt}`;
            const testPlaceholder = 'test-placeholder';

            render(
                <TTextArea counter={10}
                           onChange={mockOnChange}
                           placeholder={testPlaceholder}
                           value={testValue} />
            );

            const counter = screen.getByText(testData);

            // Assert
            expect(counter).toBeInTheDocument();

        });

        it('When counter prop and disabled prop are both applied, the counter area should be empty', async () => {

            // Arrange
            const cnt = 10;
            const testValue = '12345';
            const testData = `${testValue.length} / ${cnt}`;

            render(
                <TTextArea counter={10}
                           onChange={mockOnChange}
                           value={testValue} />
            );

            const counter = screen.getByText(testData);

            // Assert
            expect(counter).toBeInTheDocument();

        });

    });

});