import {act, render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef} from 'react';
import TCheckbox from '~/input/checkbox/TCheckbox';
import TValidatorRule from '@/common/validator/TValidatorRule';

describe('TCheckbox', () => {

    const mockFn = jest.fn();

    beforeEach(() => { mockFn.mockClear(); });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';

            render(<TCheckbox className={testData}>Test</TCheckbox>);

            const root = screen.getByTestId('t-checkbox-root');

            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};

            render(<TCheckbox style={testData}>Test</TCheckbox>);

            const root = screen.getByTestId('t-checkbox-root');

            // Assert
            expect(root).toHaveStyle(testData);

        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';

            render(<TCheckbox id={testData}>Test</TCheckbox>);

            const root = screen.getByTestId('t-checkbox-root');

            // Assert
            expect(root).toHaveAttribute('id', testData);

        });

        it('When disabled prop is applied, root has t-checkbox--disabled class', () => {

            // Arrange
            render(<TCheckbox disabled>Test</TCheckbox>);

            const root = screen.getByTestId('t-checkbox-root');

            // Assert
            expect(root).toHaveClass('t-checkbox--disabled');

        });

        it('When disabled prop is applied, root will be applied -1 to tabIndex', () => {

            // Arrange
            render(<TCheckbox disabled>Test</TCheckbox>);

            const container = screen.getByTestId('t-checkbox-container');

            // Assert
            expect(container).toHaveAttribute('tabIndex', '-1');

        });

        it('When value is an invalid, root has t-checkbox--failure class', async () => {

            // Arrange
            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox ref={checkboxRef}
                           rules={[TValidatorRule.required('test error message')]}
                >
                    Test
                </TCheckbox>,
            );

            const root = screen.getByTestId('t-checkbox-root');

            // Act
            act(() => {
                checkboxRef.current.validate();
            });

            // Assert
            expect(root).toHaveClass('t-checkbox--failure');

        });

        it('When value is an valid, root has t-checkbox--success class', async () => {

            // Arrange
            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={true}
                    successMessage={'test success message'}
                    rules={[TValidatorRule.required('test error message')]}
                >
                    Test
                </TCheckbox>,
            );

            const root = screen.getByTestId('t-checkbox-root');

            // Act
            act(() => {
                checkboxRef.current.validate();
            });

            // Assert
            expect(root).toHaveClass('t-checkbox--success');

        });

        it('When indeterminate prop applied, icon has t-checkbox__icon--indeterminate class', () => {

            // Arrange
            render(<TCheckbox indeterminate>Test</TCheckbox>);

            const icon = screen.getByRole('img');

            // Assert
            expect(icon).toHaveClass('t-checkbox__icon--indeterminate');

        });

        it('When checkbox checked, icon has t-checkbox__icon--check class', () => {

            // Arrange
            render(<TCheckbox checked>Test</TCheckbox>);

            const icon = screen.getByRole('img');

            // Assert
            expect(icon).toHaveClass('t-checkbox__icon--check');

        });

        it('When checkbox unchecked, icon has t-checkbox__icon--unchecked class', () => {

            // Arrange
            render(<TCheckbox checked={false}>Test</TCheckbox>);

            const icon = screen.getByRole('img');

            // Assert
            expect(icon).toHaveClass('t-checkbox__icon--uncheck');

        });

    });

    describe('Handler', () => {

        it('When onfocus handler is triggered, container should have focus', async () => {

            // Arrange
            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(<TCheckbox ref={checkboxRef} value={true}>Test</TCheckbox>);

            const container = screen.getByTestId('t-checkbox-container');

            // Act
            act(() => {
                checkboxRef.current.focus();
            });

            // Assert
            expect(container).toHaveFocus();

        });

        it('When validate handler is triggered, the validate message should be displayed on message area', async () => {

            // Arrange
            const testData = 'test success message';
            const testValue = true;

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={testValue}
                    successMessage={testData}
                    rules={[TValidatorRule.required('test error message')]}
                >
                    Test
                </TCheckbox>,
            );

            // Act
            act(() => {
                checkboxRef.current.validate();
            });

            // Arrange
            const message = screen.getByText(testData);

            // Assert
            expect(message).toHaveTextContent(testData);

        });

        it('When onChange prop is not applied, onChange handler is not called', async () => {

            // Arrange
            const testChildren = 'test children';

            const user = userEvent.setup();

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={true}
                >
                    {testChildren}
                </TCheckbox>,
            );

            const content = screen.getByText(testChildren);

            // Act
            await user.click(content);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(0);

        });

        it('When the checkbox is checked and clicked, it should be pass negative and positive values to the onChange handler', async () => {

            // Arrange
            let negativeValue = null;
            let positiveValue = null;
            const testChildren = 'test children';

            const user = userEvent.setup();

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={true}
                    onChange={(negative, positive) => {
                        negativeValue = negative;
                        positiveValue = positive;
                    }}
                >
                    {testChildren}
                </TCheckbox>,
            );

            const content = screen.getByText(testChildren);

            // Act
            await user.click(content);

            // Assert
            expect(negativeValue).not.toBe(undefined);
            expect(positiveValue).not.toBe(undefined);

        });

        it('When the checkbox is unchecked and it is clicked, it should be pass positive value to the onChange handler', async () => {

            // Arrange
            let negativeValue = null;
            let positiveValue = null;
            const testChildren = 'test children';

            const user = userEvent.setup();

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={false}
                    onChange={(positive, negative) => {
                        negativeValue = negative;
                        positiveValue = positive;
                    }}
                >
                    {testChildren}
                </TCheckbox>,
            );

            const content = screen.getByText(testChildren);

            // Act
            await user.click(content);

            // Assert
            expect(negativeValue).toBe(undefined);
            expect(positiveValue).not.toBe(undefined);

        });

    });

    describe('Event', () => {

        it('Checkbox click invokes the provided onClick handler', async () => {

            // Arrange
            const testChildren = 'test Children';

            const user = userEvent.setup();

            render(<TCheckbox onChange={mockFn}>{testChildren}</TCheckbox>);

            const content = screen.getByText(testChildren);

            // Act
            await user.click(content);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });


        it('When pressing Enter on the thumb, onChange handler is called', async () => {

            // Arrange
            const testChildren = 'test children';

            const user = userEvent.setup();

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={false}
                    onChange={mockFn}
                >
                    {testChildren}
                </TCheckbox>,
            );

            const content = screen.getByText(testChildren);

            // Act
            act(() => {
                checkboxRef.current.focus();
            });

            await user.type(content, '{enter}', {skipClick: true});

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

        it('When pressing Space on the thumb, onChange handler is called', async () => {

            // Arrange
            const testChildren = 'test children';

            const user = userEvent.setup();

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={false}
                    onChange={mockFn}
                >
                    {testChildren}
                </TCheckbox>,
            );

            const content = screen.getByText(testChildren);

            // Act
            act(() => {
                checkboxRef.current.focus();
            });

            await user.type(content, ' ', {skipClick: true});

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

        it('When focussing, validate message should be clear', async () => {

            // Arrange
            const testData = 'test success message';

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={true}
                    successMessage={testData}
                    rules={[TValidatorRule.required('test error message')]}
                >
                    Test
                </TCheckbox>,
            );

            const container = screen.getByTestId('t-checkbox-container');

            // Act
            act(() => {
                checkboxRef.current.validate();
                container.focus();
            });

            // Arrange
            const message = screen.queryByText(testData);

            // Assert
            expect(container).toHaveFocus();
            expect(message?.textContent).not.toBe(testData);

        });

        it('When lazy prop false and focus out, validate message should be displayed on message area', async () => {

            // Arrange
            const testData = 'test success message';

            const user = userEvent.setup();

            render(
                <TCheckbox
                    value={true}
                    lazy={false}
                    successMessage={testData}
                    rules={[TValidatorRule.required('test error message')]}
                >
                    Test
                </TCheckbox>,
            );

            const container = screen.getByTestId('t-checkbox-container');

            // Act
            act(() => {
                container.focus();
            });

            await user.click(document.body);

            // Arrange
            const message = screen.queryByText(testData);

            // // Assert
            expect(message?.textContent).toBe(testData);

        });

    });

    describe('Content', () => {

        it('When rules prop is applied, validate message should be displayed on message area', () => {

            // Arrange
            const testData = 'test error message';

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    rules={[TValidatorRule.required(testData)]}
                >
                    Test
                </TCheckbox>,
            );

            // Act
            act(() => {
                checkboxRef.current.validate();
            });

            // Arrange
            const message = screen.queryByText(testData);

            // Assert
            expect(message).toHaveTextContent(testData);

        });

        it('When successMessage prop is applied and value is an valid, it should be displayed on content area', () => {

            // Arrange
            const testData = 'test success message';

            const {result} = renderHook(() => useRef(null));
            const checkboxRef = result.current;

            render(
                <TCheckbox
                    ref={checkboxRef}
                    value={true}
                    successMessage={testData}
                    rules={[TValidatorRule.required('test error message')]}
                >
                    Test
                </TCheckbox>,
            );

            // Act
            act(() => {
                checkboxRef.current.validate();
            });

            // Arrange
            const message = screen.queryByText(testData);

            // Assert
            expect(message).toHaveTextContent(testData);

        });

        it('When children prop applied, it should be displayed on content area', () => {

            // Arrange
            const testData = 'children message';
            render(<TCheckbox>{testData}</TCheckbox>);

            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveTextContent(testData);

        });

        it('When positive value applied and value is that value, checkbox should be checked', () => {

            // Arrange
            const testData = 'changePositive';

            render(<TCheckbox value={testData} positiveValue={testData}>Test</TCheckbox>);

            const icon = screen.getByRole('img');

            // Assert
            expect(icon).toHaveClass('t-checkbox__icon--check');

        });

        it('When negative value applied, the checkbox should be unchecked if it matches that value', async () => {

            // Arrange
            const testData = 'testNegative';

            render(<TCheckbox value={testData} negativeValue={'testNegative'}>Test</TCheckbox>);

            const icon = screen.getByRole('img');

            // Assert
            expect(icon).toHaveClass('t-checkbox__icon--uncheck');

        });


        it('When positive value applied and the checkbox button selected, positive value pass on onChanged handler', async () => {

            // Arrange
            let testData = null;
            const testPositiveValue = 'changePositive';

            const user = userEvent.setup();

            render(
                <TCheckbox positiveValue={testPositiveValue}
                           onChange={(positiveValue) => {
                               testData = positiveValue;
                           }}>
                    Test
                </TCheckbox>,
            );

            const icon = screen.getByRole('img');

            // Act
            await user.click(icon);

            // Assert
            expect(testData).toBe(testPositiveValue);

        });

        it('When negative value applied and the checkbox button unchecked, positive value pass on onChanged handler', async () => {

            // Arrange
            let testData = null;
            const testNegativeValue = 'changeNegative';

            const user = userEvent.setup();

            render(
                <TCheckbox value={true}
                           negativeValue={testNegativeValue}
                           onChange={(negative, positive) => {
                               testData = negative;
                           }}>
                    Test
                </TCheckbox>,
            );

            const icon = screen.getByRole('img');

            await user.click(icon);

            // Assert
            expect(testData).toBe(testNegativeValue);

        });

    });

});
