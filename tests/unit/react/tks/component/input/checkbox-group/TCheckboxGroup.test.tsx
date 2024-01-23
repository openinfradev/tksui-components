import {act, render, screen} from '@testing-library/react';
import TCheckboxGroup from '~/input/checkbox-group/TCheckboxGroup';
import React, {createRef} from 'react';
import userEvent from '@testing-library/user-event';
import {TRadioGroupRef} from '@/components';
import TValidatorRule from '@/common/validator/TValidatorRule';

describe('TCheckboxGroup', () => {

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
            const testValue = [];

            render(<TCheckboxGroup className={testData} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-checkbox-group-root');

            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};
            const testValue = [];

            render(<TCheckboxGroup style={testData} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-checkbox-group-root');

            // Assert
            expect(root).toHaveStyle(testData);

        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';
            const testValue = [];

            render(<TCheckboxGroup id={testData} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-checkbox-group-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);

        });

        it('When disabled prop is applied, root has t-checkbox-group--disabled class', () => {

            // Arrange
            const testValue = [];

            render(<TCheckboxGroup disabled={true} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-checkbox-group-root');

            // Assert
            expect(root).toHaveClass('t-checkbox-group--disabled');

        });

        it('When disabled prop is applied, root will be applied -1 to tabIndex', () => {

            // Arrange
            const testValue = [];

            render(<TCheckboxGroup disabled={true} onChange={mockFn} value={testValue} items={items}/>);

            const root = screen.getByTestId('t-checkbox-group-root');

            // Assert
            expect(root).toHaveAttribute('tabIndex', '-1');

        });

        it('When value is an invalid, root has t-radio-group--failure class', () => {

            // Arrange
            const testValue = [];

            const radioGroupRef = createRef<TRadioGroupRef>()

            render(
                <TCheckboxGroup ref={radioGroupRef}
                                onChange={mockFn}
                                value={testValue}
                                items={items}
                                rules={[TValidatorRule.requiredArr('과일을 선택해 주세요')]}
                />
            );

            const root = screen.getByTestId('t-checkbox-group-root');

            // Act
            act(() => {
                radioGroupRef.current.validate();
            });

            // Assert
            expect(root).toHaveClass('t-checkbox-group--failure');

        });

        it('When value is an valid, root has t-radio-group--success class', () => {

            // Arrange
            const testValue = ['apple'];

            const radioGroupRef = createRef<TRadioGroupRef>()

            render(
                <TCheckboxGroup ref={radioGroupRef}
                                onChange={mockFn}
                                value={testValue}
                                items={items}
                                successMessage={'test success message'}
                                rules={[TValidatorRule.requiredArr('과일을 선택해 주세요')]}
                />
            );

            const root = screen.getByTestId('t-checkbox-group-root');

            // Act
            act(() => {
                radioGroupRef.current.validate();
            });

            // Assert
            expect(root).toHaveClass('t-checkbox-group--success');

        });

    });

    describe('Event', () => {

        it('When value is changed, onChange handler is called', async () => {

            // Arrange
            const testValue = [];

            const user = userEvent.setup();

            render(<TCheckboxGroup onChange={mockFn} value={testValue} items={items}/>);


            const item = screen.getByText('Apple');

            await user.click(item);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });


        it('When item is checked and that is clicked, it is removed from array', async () => {

            // Arrange
            let testData : any = ['apple'];

            const user = userEvent.setup();

            render(
                <TCheckboxGroup value={testData}
                                onChange={items => {
                                    testData = items
                                }}
                                items={items}/>
            );

            const item = screen.getByText('Apple');

            await user.click(item);

            // Assert
            expect(testData.length).toBe(0);

        });

        it('When item is unchecked and that is clicked, it is added to array', async () => {

            // Arrange
            let testData : any = [];

            const user = userEvent.setup();

            render(
                <TCheckboxGroup value={testData}
                                onChange={items => {
                                    testData = items
                                }}
                                items={items}/>
            );

            const item = screen.getByText('Apple');

            await user.click(item);

            // Assert
            expect(testData.length).toBe(1);

        });

        it('When focussing, validate message should be clear', async () => {

            // Arrange
            const testData = 'test success message';
            const testValue = ['apple'];

            const radioGroupRef = createRef<TRadioGroupRef>()

            render(
                <TCheckboxGroup ref={radioGroupRef}
                                onChange={mockFn}
                                value={testValue}
                                items={items}
                                successMessage={testData}
                                rules={[TValidatorRule.requiredArr('과일을 선택해 주세요')]}
                />
            );

            const root = screen.getByTestId('t-checkbox-group-root');

            // Act
            act(() => {
                radioGroupRef.current.validate();
                root.focus();
            });

            // Arrange
            const message = screen.queryByText(testData);

            // Assert
            expect(root).toHaveFocus();
            expect(message?.textContent).not.toBe(testData);

        });

        it('When lazy prop false and focus out, validate message should be displayed on message area', async () => {

            // Arrange
            const testData = 'test success message';
            const testValue = ['apple'];

            const radioGroupRef = createRef<TRadioGroupRef>()

            const user = userEvent.setup();

            render(
                <TCheckboxGroup ref={radioGroupRef}
                                onChange={mockFn}
                                value={testValue}
                                items={items}
                                lazy={false}
                                successMessage={testData}
                                rules={[TValidatorRule.requiredArr('과일을 선택해 주세요')]}
                />
            );

            const root = screen.getByTestId('t-checkbox-group-root');

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
            let testValue = [];

            const radioGroupRef = createRef<TRadioGroupRef>()

            render(
                <TCheckboxGroup ref={radioGroupRef}
                                onChange={mockFn}
                                value={testValue}
                                items={items}
                                rules={[TValidatorRule.requiredArr(testData)]}
                />
            );

            // Act
            act(() => {
                radioGroupRef.current.validate();
            });

            // Arrange
            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveTextContent(testData);

        });


        it('When successMessage prop is applied and value is an valid, it should be displayed on content area', () => {

            // Arrange
            const testData = 'test success message';
            const testValue = ['apple'];

            const radioGroupRef = createRef<TRadioGroupRef>()

            render(
                <TCheckboxGroup ref={radioGroupRef}
                                onChange={mockFn}
                                value={testValue}
                                items={items}
                                successMessage={testData}
                                rules={[TValidatorRule.requiredArr('가장 좋아하는 과일을 선택해 주세요')]}
                />
            );

            // Act
            act(() => {
                radioGroupRef.current.validate();
            });

            // Arrange
            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveTextContent(testData);

        });

        it('When items prop applied, it should be displayed on content area', () => {

            // Arrange
            let testValue = [];
            render(<TCheckboxGroup onChange={mockFn} value={testValue} items={items}/>);

            const apple = screen.getByText('Apple');
            const banana = screen.getByText('Banana');

            // Assert
            expect(apple).toBeInTheDocument();
            expect(banana).toBeInTheDocument();

        });

        it('When  disabled attribute is applied to an item, that item should not be changed', () => {

            // Arrange
            let testValue = [];

            render(
                <TCheckboxGroup onChange={mockFn}
                                value={testValue}
                                items={items}
                />
            );

            const checkboxButtons = screen.getAllByTestId('t-checkbox-root');

            // Assert
            expect(checkboxButtons[2]).toHaveClass('t-checkbox--disabled');

        });

        it('When textKey prop is applied, the text will have the key of that item', () => {

            // Arrange
            const testData = '사과';
            let testValue = [];

            render(
                <TCheckboxGroup onChange={mockFn}
                                value={testValue}
                                items={items}
                                textKey={'koreanText'}
                />
            );


            const item = screen.getByText(testData);

            // Assert
            expect(item).toHaveTextContent(testData);

        });

        it('When valueKey prop is applied, the value will have the key of that item.', async () => {

            // Arrange
            const testValue = ['a'];

            render(
                <TCheckboxGroup onChange={mockFn}
                                value={testValue}
                                items={items}
                                valueKey={'value2'}
                />
            );

            const icons = screen.getAllByRole('img');

            // Assert
            expect(icons[0]).toHaveClass('t-checkbox__icon--check');

        });

        it('When labelTemplate prop is applied, it should be displayed on content aria ', () => {

            // Arrange
            const testData = 'a';
            const testValue = ['a'];

            render(
                <TCheckboxGroup onChange={mockFn}
                                value={testValue}
                                items={items}
                                valueKey={'value2'}
                                labelTemplate={(item) => item.value2}
                />
            );

            const item = screen.getByText(testData);

            // Assert
            expect(item).toHaveTextContent(testData);

        });

    });

});