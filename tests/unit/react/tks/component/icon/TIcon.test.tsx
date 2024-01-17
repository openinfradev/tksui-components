import {MouseEvent} from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TIcon} from '~/icon';


describe('TIcon', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';
            render(<TIcon className={'class-name-prop'}>close</TIcon>);
            const root = screen.getByRole('img');


            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};
            render(<TIcon style={testData}>close</TIcon>);
            const root = screen.getByRole('img');

            // Assert

            expect(root).toHaveStyle(testData);
        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';
            render(<TIcon id={testData}>close</TIcon>);
            const root = screen.getByRole('img');

            // Assert

            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);
        });

        it('Color prop applies to root', () => {
            render(<TIcon color={'blue'}>close</TIcon>);

            const button = screen.getByRole('img');

            expect(button).toHaveStyle({color: 'blue', stroke: 'blue', fill: 'blue'});
        });

    });

    describe('size', () => {

        it('When valid size is entered, it will be applied in the classname', () => {
            render(<>
                <TIcon size={'xsmall'}>close</TIcon>
                <TIcon size={'small'}>close</TIcon>
                <TIcon size={'medium'}>close</TIcon>
                <TIcon size={'large'}>close</TIcon>
                <TIcon size={'xlarge'}>close</TIcon>
            </>);

            const icons = screen.getAllByRole('img');

            expect(icons[0]).toHaveClass('t-icon--xsmall');
            expect(icons[1]).toHaveClass('t-icon--small');
            expect(icons[2]).toHaveClass('t-icon--medium');
            expect(icons[3]).toHaveClass('t-icon--large');
            expect(icons[4]).toHaveClass('t-icon--xlarge');
        });


        it('When invalid size is entered or not entered, medium size will is applied', () => {
            render(<>
                <TIcon size={'invalid'}>close</TIcon>
                <TIcon>close</TIcon>
            </>);

            const icons = screen.getAllByRole('img');

            expect(icons[0]).toHaveClass('t-icon--medium');
            expect(icons[1]).toHaveClass('t-icon--medium');
        });

        it('When small is applied, icon size will be small', () => {
            render(<TIcon small>close</TIcon>);

            const button = screen.getByRole('img');

            expect(button).toHaveClass('t-icon--small');
        });

        it('When medium is applied, icon size will be medium', () => {
            render(<TIcon medium>close</TIcon>);

            const button = screen.getByRole('img');

            expect(button).toHaveClass('t-icon--medium');
        });

        it('When large is applied, icon size will be large', () => {
            render(<TIcon large>close</TIcon>);

            const button = screen.getByRole('img');

            expect(button).toHaveClass('t-icon--large');
        });

        it('When xlarge is applied, icon size will be xlarge', () => {
            render(<TIcon xlarge>close</TIcon>);

            const button = screen.getByRole('img');

            expect(button).toHaveClass('t-icon--xlarge');
        });


        it('When both size and shortcut prop are applied, size prop will be applied.', () => {
            render(<TIcon size={'large'} small>close</TIcon>);

            const button = screen.getByRole('img');

            expect(button).toHaveClass('t-icon--large');
        });


    });


    describe('Event', () => {

        it('When icon is clicked, onClick event handler will be executed', async () => {

            // Arrange
            const user = userEvent.setup();
            const mockOnClick = jest.fn(() => { /* Just test */ });
            render(<TIcon onClick={mockOnClick}>close</TIcon>);

            const root = screen.getByRole('img');

            // Act
            await user.click(root);

            // Assert
            expect(mockOnClick).toBeCalledTimes(1);
        });


        it('When icon is disabled, onClick event handler will be NOT executed', async () => {

            // Arrange
            const user = userEvent.setup();
            const mockOnClick = jest.fn(() => { /* Just test */ });
            render(<TIcon disabled onClick={mockOnClick}>close</TIcon>);

            const root = screen.getByRole('img');

            // Act
            await user.click(root);

            // Assert
            expect(mockOnClick).toBeCalledTimes(0);
        });

        it('When the icon is clicked, the onClick event handler should receive the event parameter', async () => {

            // Arrange
            const user = userEvent.setup();
            const mockOnClick = jest.fn();
            render(<TIcon onClick={mockOnClick}>Parameter Test</TIcon>);

            const root = screen.getByRole('img');

            // Act
            await user.click(root);
            expect(mockOnClick).toHaveBeenCalled();

            // Arrange
            const eventParameter = mockOnClick.mock.calls[0][0];

            // Assert
            expect(eventParameter).toBeTruthy();
            expect(eventParameter.target).toBe(root);
        });

        it('When icon has focused and user type something, onKeyDown event handler will be executed', async () => {

            // Arrange
            const user = userEvent.setup();
            const mockOnKeyDown = jest.fn(() => { /* Just test */ });
            const mockOnKeyDownEnter = jest.fn(() => { /* Just test */ });
            const mockOnKeyDownSpace = jest.fn(() => { /* Just test */ });
            render(
                <TIcon onKeyDown={mockOnKeyDown}
                       onKeyDownEnter={mockOnKeyDownEnter}
                       onKeyDownSpace={mockOnKeyDownSpace}>
                    close
                </TIcon>,
            );

            // Act
            await user.tab();
            await user.keyboard('{enter}');
            await user.keyboard(' ');

            // Assert
            expect(mockOnKeyDown).toBeCalledTimes(2);
            expect(mockOnKeyDownEnter).toBeCalledTimes(1);
            expect(mockOnKeyDownSpace).toBeCalledTimes(1);
        });

        it('When icon is disabled and user type something on Icon, onKeyDown event handler will be NOT executed', async () => {

            // Arrange
            const user = userEvent.setup()
            const mockOnKeyDown = jest.fn(() => { /* Just test */ });
            const mockOnKeyDownEnter = jest.fn(() => { /* Just test */ });
            const mockOnKeyDownSpace = jest.fn(() => { /* Just test */ });
            render(
                <TIcon disabled
                       onKeyDown={mockOnKeyDown}
                       onKeyDownEnter={mockOnKeyDownEnter}
                       onKeyDownSpace={mockOnKeyDownSpace}>
                    close
                </TIcon>,
            );

            // Act
            await user.tab();
            await user.keyboard('{enter}');
            await user.keyboard(' ');

            // Assert
            expect(mockOnKeyDown).toBeCalledTimes(0);
            expect(mockOnKeyDownEnter).toBeCalledTimes(0);
            expect(mockOnKeyDownSpace).toBeCalledTimes(0);
        });

    });

});
