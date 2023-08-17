import {act, getAllByRole, render, screen} from '@testing-library/react';
import {CSSProperties} from 'react';
import userEvent from '@testing-library/user-event';
import TButtonGroup from '~/tks/component/button/button-group/TButtonGroup';
import useInputState from '~/tks/component/common/hook/UseInputState';
import {
    TButtonGroupItem,
    TButtonGroupValue,
} from '~/tks/component/button/button-group/TButtonGroup.interface';

jest.mock('~/tks/component/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TButtonGroup', () => {

    const ButtonGroup = (props: {
        className?: string,
        style?: CSSProperties,

        value?: TButtonGroupValue,
        items?: TButtonGroupItem[],
        onChange?(value: TButtonGroupValue): void,

        multiSelect?: boolean,

        primary?: boolean,
        disabled?: boolean,

        initialValue?: string | string[], // additional
    }) => {
        const buttonGroup = useInputState<any>(props.initialValue || '');
        const defaultItems = [{template: 'Bold', value: 'b'}, {template: 'Italic', value: 'i'}];
        return (<TButtonGroup value={buttonGroup.value} onChange={buttonGroup.onChange} items={props.items || defaultItems} {...props} />);
    };


    describe('style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<ButtonGroup className={'test-class'}/>);

            const buttonGroup = screen.getByTestId('button-group-root');

            // Assert
            expect(buttonGroup)
                .toHaveClass('test-class');
        });

        it('When disabled prop is applied, root has t-button-group--disabled class', () => {

            // Arrange
            render(<ButtonGroup disabled/>);

            const buttonGroup = screen.getByTestId('button-group-root');
            const buttons = getAllByRole(buttonGroup, 'button');
            // Assert
            expect(buttonGroup)
                .toHaveClass('t-button-group--disabled');

            buttons.forEach((button) => {
                expect(button)
                    .toHaveClass('t-button--disabled');
            });
        });

        it('When primary prop is applied, root has t-button-group--primary class', () => {

            // Arrange
            render(<ButtonGroup primary/>);

            const buttonGroup = screen.getByTestId('button-group-root');
            const buttons = getAllByRole(buttonGroup, 'button');

            // Assert
            expect(buttonGroup)
                .toHaveClass('t-button-group--primary');

            buttons.forEach((button) => {
                expect(button)
                    .toHaveClass('t-button--primary');
            });
        });

        it('Style prop applies to the root', () => {

            // Arrange
            render(<ButtonGroup style={{color: 'red'}}/>);

            const buttonGroup = screen.getByTestId('button-group-root');

            // Assert
            expect(buttonGroup)
                .toHaveStyle({color: 'red'});
        });
    });


    describe('Value', () => {

        it('When clicking on an item, ButtonGroup with multiSelect=false updates its value', async () => {

            // Arrange
            render(<ButtonGroup initialValue={'b'} multiSelect={false}/>);

            const [boldButton, italicButton] = screen.getAllByRole('button');

            // Assert
            expect(boldButton)
                .toHaveClass('t-button--main');

            expect(italicButton)
                .not.toHaveClass('t-button--main');

            // Act
            await act(async () => {
                await userEvent.click(italicButton);
            });

            // Assert
            expect(boldButton)
                .not.toHaveClass('t-button--main');

            expect(italicButton)
                .toHaveClass('t-button--main');
        });

        it('When clicking on an item, ButtonGroup with multiSelect=true updates its value as an array', async () => {

            // Arrange
            render(<ButtonGroup initialValue={[]} multiSelect={true}/>);

            const [boldButton, italicButton] = screen.getAllByRole('button');

            // Assert
            expect(boldButton)
                .not.toHaveClass('t-button--main');

            expect(italicButton)
                .not.toHaveClass('t-button--main');

            // Act
            await act(async () => {
                await userEvent.click(boldButton);
            });
            // Assert
            expect(boldButton)
                .toHaveClass('t-button--main');

            // Act
            await act(async () => {
                await userEvent.click(italicButton);
            });

            expect(italicButton)
                .toHaveClass('t-button--main');

            // Act
            await act(async () => {
                await userEvent.click(boldButton);
            });

            // Assert
            expect(boldButton)
                .not.toHaveClass('t-button--main');

            expect(italicButton)
                .toHaveClass('t-button--main');
        });

    });


});
