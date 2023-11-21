import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CSSProperties} from 'react';
import TNumberField from '~/input/number-field/TNumberField';
import useInputState from '@/common/hook/UseInputState';


describe('TNumberField', () => {

    const NumberField = (props: {
        min?: number,
        max?: number,
        step?: number,
        initialValue?: string,
        className?: string,
        style?: CSSProperties,
        width?: string,
        type?: 'underline' | 'outline',
        disabled?: boolean,
        required?: boolean,
        label?: string,
        placeholder?: string,
    }) => {
        const numberField = useInputState<string>(props.initialValue);
        return (<TNumberField value={numberField.value} onChange={numberField.onChange} {...props} />);
    };

    describe('style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<NumberField className={'class-name-prop'}/>);

            // Assert
            const root = screen.getByTestId('number-field-root');

            expect(root)
                .toHaveClass('class-name-prop');
        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<NumberField style={{width: '300px'}}/>);

            // Assert
            const root = screen.getByTestId('number-field-root');

            expect(root)
                .toHaveStyle({width: '300px'});
        });

        it('Width prop applies to root', () => {

            // Arrange
            render(<NumberField width={'300px'}/>);

            // Assert
            const root = screen.getByTestId('number-field-root');

            expect(root)
                .toHaveStyle({width: '300px'});
        });

        it('When type prop is set to underline, root has t-number-field--underline class', () => {

            // Arrange
            render(<NumberField type={'underline'}/>);

            // Assert
            const root = screen.getByTestId('number-field-root');

            expect(root)
                .toHaveClass('t-number-field--underline');
        });


        it('When disabled prop is applies, root has t-number-field--disabled class', () => {

            // Arrange
            render(<NumberField disabled/>);

            // Assert
            const root = screen.getByTestId('number-field-root');

            expect(root)
                .toHaveClass('t-number-field--disabled');
        });

        it('Should render label correctly', async () => {

            // Arrange
            render(<>
                <NumberField label={'non required label'}/>
                <NumberField required label={'required label'}/>
            </>);
            const nonRequiredLabel = screen.getByText('non required label');
            const requiredLabel = screen.getByText('required label');

            // Assert
            expect(nonRequiredLabel)
                .toHaveClass('t-number-field__label');
            expect(nonRequiredLabel)
                .not.toHaveClass('t-number-field__label--required');

            expect(requiredLabel)
                .toHaveClass('t-number-field__label');
            expect(requiredLabel)
                .toHaveClass('t-number-field__label--required');


        });

        it('Renders the input element with the specified placeholder text', async () => {

            // Arrange
            render(<NumberField placeholder={'test placeholder'}/>);

            const input = screen.getByPlaceholderText('test placeholder');

            // Assert
            expect(input)
                .toBeInTheDocument();
        });

        it('When user clicks inside the input, the input should receive focus', async () => {

            // Arrange
            render(<NumberField/>);

            const numberInput = screen.getByRole('spinbutton');

            // Act
            await act(async () => {
                await userEvent.click(numberInput);
            });

            // Assert
            expect(numberInput)
                .toHaveFocus();

        });

        it('When hint prop is applied, the detail message shows the hint', () => {
            // Arrange
            const hintText = 'hint text';


            // Act
            render(<TNumberField value={''} onChange={null} hint={hintText}/>);
            const message = screen.getByTestId('number-field-message');

            // Assert
            expect(message).toHaveTextContent(hintText);
        });


    });

    describe('min/max/step', () => {

        it('When props.value is equal to props.max, the increment button is disabled', () => {

            // Arrange
            render(<NumberField max={10} initialValue={'10'}/>);

            // Assert
            const incrementButton = screen.getByTestId('number-field__increment-button');

            expect(incrementButton)
                .toHaveClass('t-number-field__container__action-icon__increment--disabled');
        });

        it('When props.value is equal to props.min, the decrement button is disabled', () => {

            // Arrange
            render(<NumberField min={0} initialValue={'0'}/>);

            // Assert
            const decrementButton = screen.getByTestId('number-field__decrement-button');

            expect(decrementButton)
                .toHaveClass('t-number-field__container__action-icon__decrement--disabled');
        });

        it('When props.value is between props.min and props.max, both the increment and decrement buttons are clickable', () => {

            // Arrange
            render(<NumberField min={-5} max={5} initialValue={'2'}/>);

            // Assert
            const incrementButton = screen.getByTestId('number-field__increment-button');
            expect(incrementButton)
                .not
                .toHaveClass('t-number-field__container__action-icon__increment--disabled');


            const decrementButton = screen.getByTestId('number-field__decrement-button');

            expect(decrementButton)
                .not
                .toHaveClass('t-number-field__container__action-icon__decrement--disabled');
        });

        it('When the increment button is clicked, the number increases by the specified step amount', async () => {

            // Arrange
            render(<NumberField min={-5} max={5} step={5} initialValue={'0'}/>);

            // Assert 0
            const incrementButton = screen.getByTestId('number-field__increment-button');
            const decrementButton = screen.getByTestId('number-field__decrement-button');
            expect(incrementButton)
                .not
                .toHaveClass('t-number-field__container__action-icon__increment--disabled');

            expect(decrementButton)
                .not
                .toHaveClass('t-number-field__container__action-icon__decrement--disabled');

            // Arrange
            await act(async () => {
                await userEvent.click(incrementButton);
            });

            // Assert +5
            expect(incrementButton)
                .toHaveClass('t-number-field__container__action-icon__increment--disabled');

            expect(decrementButton)
                .not
                .toHaveClass('t-number-field__container__action-icon__decrement--disabled');

            // Arrange
            await act(async () => {
                await userEvent.click(decrementButton);
                await userEvent.click(decrementButton);
            });

            // Assert -5

            expect(incrementButton)
                .not
                .toHaveClass('t-number-field__container__action-icon__increment--disabled');

            expect(decrementButton)
                .toHaveClass('t-number-field__container__action-icon__decrement--disabled');
        });
    });

    describe('Adjust value', () => {

        it('When user type NaN and focus out, it should be changed to null', async () => {

            // Arrange
            render(<NumberField min={-10} max={10} initialValue={''}/>);
            const inputElement = screen.getByRole('spinbutton');

            // Assert
            expect(inputElement)
                .toHaveValue(null);

            // Act
            await act(async () => {
                await userEvent.type(inputElement, '-');
                await userEvent.tab();
            });

            // Assert
            expect(inputElement)
                .toHaveValue(null);

            // Act
            await act(async () => {
                await userEvent.type(inputElement, '--');
                await userEvent.tab();
            });

            // Assert
            expect(inputElement)
                .toHaveValue(null);

            // Act
            await act(async () => {
                await userEvent.type(inputElement, 'e');
                await userEvent.tab();
            });

            // Assert
            expect(inputElement)
                .toHaveValue(null);
        });

        it('When min value is greater than 0, entering - changes the value to min value.', async () => {

            // Arrange
            const minValue = 5;
            render(<NumberField min={minValue} max={10} initialValue={''}/>);
            const inputElement = screen.getByRole('spinbutton');

            // Act
            await act(async () => {
                await userEvent.type(inputElement, '-');
            });
            await act(async () => {
                await userEvent.tab();
            });

            // Assert
            expect(inputElement)
                .toHaveValue(minValue);
        });

        it('When entering +, the input is ignored and the value remains unchanged', async () => {

            // Arrange
            render(<NumberField min={0} max={10} initialValue={''}/>);
            const inputElement = screen.getByRole('spinbutton');

            // Act
            await act(async () => {
                await userEvent.type(inputElement, '+');
            });
            await act(async () => {
                await userEvent.tab();
            });

            // Assert
            expect(inputElement)
                .toHaveValue(null);
        });

        it('When value is not multiple of step, value is adjusted to the nearest multiple', async () => {

            // Arrange
            render(<NumberField min={0} max={20} step={5} initialValue={''}/>);
            const inputElement = screen.getByRole('spinbutton');

            // Act
            await act(async () => {
                await userEvent.type(inputElement, '7');
            });
            await act(async () => {
                await userEvent.tab();
            });

            // Assert
            expect(inputElement)
                .toHaveValue(5);
        });

        it('When value is not multiple of step and nearest multiple is greater than min, value is adjusted to min', async () => {

            // Arrange
            render(<NumberField min={6} max={20} step={5} initialValue={''}/>);
            const inputElement = screen.getByRole('spinbutton');

            // Act
            await act(async () => {
                await userEvent.type(inputElement, '7');
                await userEvent.tab();
            });

            // Assert
            expect(inputElement)
                .toHaveValue(6);
        });

        it('When value is not multiple of step and nearest multiple is smaller than min, value is adjusted to min', async () => {

            // Arrange
            render(<NumberField min={6} max={20} step={5} initialValue={''}/>);
            const inputElement = screen.getByRole('spinbutton');

            // Act
            await act(async () => {
                await userEvent.type(inputElement, '3');
                await userEvent.tab();
            });

            // Assert
            expect(inputElement)
                .toHaveValue(6);
        });

    });


});
