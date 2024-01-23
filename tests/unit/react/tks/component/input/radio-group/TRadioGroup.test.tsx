import {act, render, screen} from '@testing-library/react';
import TRadioGroup from '~/input/radio-group/TRadioGroup';
import React, {createRef} from 'react';
import {TRadioGroupRef} from '@/components';
import TValidatorRule from '@/common/validator/TValidatorRule';
import userEvent from '@testing-library/user-event';

describe('TRadioGroup', () => {

    const items = [
        {text: 'Apple', koreanText: '사과', value: 'apple', value2: 'a'},
        {text: 'Banana', koreanText: '바나나', value: 'banana', value2: 'b'},
        {text: 'Disabled', koreanText: '선택 불가 과일', value: 'disabled', value2: 'd2', disabled: true},
    ];

    const mockFn = jest.fn();

    beforeEach(() => { mockFn.mockClear(); });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';
            const testValue = null;

            render(<TRadioGroup className={testData} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-radio-group-root');

            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};
            const testValue = null;

            render(<TRadioGroup style={testData} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-radio-group-root');

            // Assert
            expect(root).toHaveStyle(testData);

        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';
            const testValue = null;

            render(<TRadioGroup id={testData} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-radio-group-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);

        });

        it('When disabled prop is applied, root has t-radio-group--disabled class', () => {

            // Arrange
            const testValue = null;

            render(<TRadioGroup disabled={true} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-radio-group-root');

            // Assert
            expect(root).toHaveClass('t-radio-group--disabled');

        });

        it('When disabled prop is applied, root will be applied -1 to tabIndex', () => {

            // Arrange
            const testValue = null;

            render(<TRadioGroup disabled={true} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-radio-group-root');

            // Assert
            expect(root).toHaveAttribute('tabIndex', '-1');

        });

        it('When value is an invalid, root has t-radio-group--failure class', () => {

            // Arrange
            const testValue = null;

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                             rules={[TValidatorRule.required('가장 좋아하는 과일을 선택해 주세요')]}
                />
            );

            const root = screen.getByTestId('t-radio-group-root');

            // Act
            act(() => {
                radioRef.current.validate();
            });

            // Assert
            expect(root).toHaveClass('t-radio-group--failure');

        });

        it('When value is an valid, root has t-radio-group--success class', () => {

            // Arrange
            const testValue = 'apple';

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                             successMessage={'test success message'}
                             rules={[TValidatorRule.required('가장 좋아하는 과일을 선택해 주세요')]}
                />
            );

            const root = screen.getByTestId('t-radio-group-root');

            // Act
            act(() => {
                radioRef.current.validate();
            });

            // Assert
            expect(root).toHaveClass('t-radio-group--success');

        });

    });

    describe('Event', () => {

        it('When value is changed, onChange handler is called', async () => {

            // Arrange
            const testValue = null;

            const user = userEvent.setup();

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                />
            );

            const item = screen.getByText('Apple');

            await user.click(item);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

        it('When focussing, validate message should be clear', async () => {

            // Arrange
            const testData = 'test success message';
            const testValue = 'apple';

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                             successMessage={testData}
                             rules={[TValidatorRule.required('가장 좋아하는 과일을 선택해 주세요')]}
                />
            );

            const root = screen.getByTestId('t-radio-group-root');
            const message = screen.queryByText(testData);

            // Act
            act(() => {
                root.focus();
            });


            // Assert
            expect(root).toHaveFocus();
            expect(message?.textContent).not.toBe(testData);

        });

        it('When lazy prop false and focus out, validate message should be displayed on message area', async () => {

            // Arrange
            const testData = 'test success message';
            const testValue = 'apple';

            const radioRef = createRef<TRadioGroupRef>();

            const user = userEvent.setup();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                             successMessage={testData}
                             lazy={false}
                             rules={[TValidatorRule.required('가장 좋아하는 과일을 선택해 주세요')]}
                />
            );

            const root = screen.getByTestId('t-radio-group-root');

            // Act
            act(() => {
                root.focus();
            });


            await user.click(document.body);

            // Arrange
            const message = screen.queryByText(testData);

            // Assert
            expect(message?.textContent).toBe(testData);

        });

    });

    describe('Content', () => {

        it('When rules prop is applied, validate message should be displayed on message area', () => {

            // Arrange
            const testData = '가장 좋아하는 과일을 선택해 주세요';
            const testValue = '';

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                             rules={[TValidatorRule.required(testData)]}
                />
            );

            // Act
            act(() => {
                radioRef.current.validate();
            });

            // Arrange
            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveTextContent(testData);

        });

        it('When successMessage prop is applied and value is an valid, it should be displayed on content aria when value is an invalid', () => {

            // Arrange
            const testData = 'test success message';
            const testValue = 'apple';

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                             successMessage={testData}
                             rules={[TValidatorRule.required('가장 좋아하는 과일을 선택해 주세요')]}
                />
            );

            // Act
            act(() => {
                radioRef.current.validate();
            });

            // Arrange
            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveTextContent(testData);

        });

        it('When items prop applied, it should be displayed on content area', () => {

            // Arrange
            const testValue = null;

            render(
                <TRadioGroup onChange={mockFn}
                             value={testValue}
                             items={items}
                />
            );

            const apple = screen.getByText('Apple');
            const banana = screen.getByText('Banana');

            // Assert
            expect(apple).toBeInTheDocument();
            expect(banana).toBeInTheDocument();

        });

        it('When  disabled attribute is applied to an item, that item should not be changed', () => {

            // Arrange
            const testValue = null;

            render(
                <TRadioGroup onChange={mockFn}
                             value={testValue}
                             items={items}
                />
            );

            const radioButtons = screen.getAllByTestId('t-radio-root')

            // Assert
            expect(radioButtons[2]).toHaveClass('t-radio--disabled');


        });

        it('When textKey prop is applied, the text will have the key of that item', () => {

            // Arrange
            const testData = '사과';
            const testValue = null;

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                             textKey={'koreanText'}
                />
            );

            const item = screen.getByText(testData);

            // Assert
            expect(item).toHaveTextContent(testData);

        });

        it('When valueKey prop is applied, the value will have the key of that item', async () => {

            // Arrange
            const testValue = 'a';

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             valueKey={'value2'}
                             items={items}
                />
            );

            const icons = screen.getAllByRole('img');

            // Assert
            expect(icons[0]).toHaveClass('t-radio__icon--selected');

        });

        it('When labelTemplate prop is applied, it should be displayed on content aria ', () => {

            // Arrange
            const testData = 'a';
            const testValue = null;

            const radioRef = createRef<TRadioGroupRef>();

            render(
                <TRadioGroup ref={radioRef}
                             onChange={mockFn}
                             value={testValue}
                             items={items}
                             labelTemplate={(item) => item.value2}
                />
            );

            const item = screen.getByText(testData);

            // Assert
            expect(item).toHaveTextContent(testData);

        });

    });

});