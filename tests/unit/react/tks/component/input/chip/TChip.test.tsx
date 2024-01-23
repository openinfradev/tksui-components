import {act, render, screen} from '@testing-library/react';
import TChip from '~/input/chip/TChip';
import userEvent from '@testing-library/user-event';
import {createRef} from 'react';
import {TChipRef} from '@/components';

describe('TChip', () => {

    const mockFn = jest.fn();

    beforeEach(() => { mockFn.mockClear(); });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';

            render(<TChip className={testData}>hello</TChip>);

            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};

            render(<TChip style={testData}>hello</TChip>);

            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveStyle(testData);

        });

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';

            render(<TChip id={testData}>hello</TChip>);

            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);

        });

        it('When type prop is set to filled, root has t-chip--filled class', () => {

            // Arrange
            render(<TChip type={'filled'}>hello</TChip>);

            const chip = screen.getByTestId('t-chip-root');

            // Assert
            expect(chip).toHaveClass('t-chip--filled');

        });

        it('When primary prop is applied, root has t-chip--primary class', () => {

            // Arrange
            render(<TChip primary={true}>hello</TChip>);

            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveClass('t-chip--primary');

        });

        it('When icon prop is applied, it should be displayed on content area', () => {

            // Arrange
            const testData = 'test content';

            render(<TChip icon={testData}>hello</TChip>);

            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveTextContent(testData);

        });

        it('When removeIcon prop and onRemove are applied, removeIcon should be displayed on content area', () => {

            // Arrange
            const testData = 'test content';

            render(<TChip removeIcon={testData} onRemove={mockFn}>hello</TChip>);

            const content = screen.getByText(testData);

            // Assert
            expect(content).toHaveTextContent(testData);

        });

    });

    describe('Size', () => {

        it('When valid size is entered, it will be applied in the classname', () => {

            // Arrange
            render(
                <>
                    <TChip size={'xsmall'}>hello</TChip>
                    <TChip size={'small'}>hello</TChip>
                    <TChip size={'medium'}>hello</TChip>
                    <TChip size={'large'}>hello</TChip>
                    <TChip size={'xlarge'}>hello</TChip>
                </>
            );

            const chips = screen.getAllByTestId('t-chip-root');

            expect(chips[0]).toHaveClass('t-chip--xsmall');
            expect(chips[1]).toHaveClass('t-chip--small');
            expect(chips[2]).toHaveClass('t-chip--medium');
            expect(chips[3]).toHaveClass('t-chip--large');
            expect(chips[4]).toHaveClass('t-chip--xlarge');

        });

        it('When xsmall is applied, icon chip will be xsmall', () => {

            // Arrange
            render(<TChip xsmall>hello</TChip>);

            const chip = screen.getByTestId('t-chip-root');

            // Assert
            expect(chip).toHaveClass('t-chip--xsmall');

        });

        it('When small is applied, icon chip will be small', () => {

            // Arrange
            render(<TChip small>hello</TChip>);

            const chip = screen.getByTestId('t-chip-root');

            // Assert
            expect(chip).toHaveClass('t-chip--small');

        });

        it('When medium is applied, icon chip will be medium', () => {

            // Arrange
            render(<TChip medium>hello</TChip>);

            const chip = screen.getByTestId('t-chip-root');

            // Assert
            expect(chip).toHaveClass('t-chip--medium');

        });

        it('When large is applied, icon chip will be large', () => {

            // Arrange
            render(<TChip large>hello</TChip>);

            const chip = screen.getByTestId('t-chip-root');

            // Assert
            expect(chip).toHaveClass('t-chip--large');

        });

        it('When xlarge is applied, icon chip will be xlarge', () => {

            // Arrange
            render(<TChip xlarge>hello</TChip>);

            const chip = screen.getByTestId('t-chip-root');

            // Assert
            expect(chip).toHaveClass('t-chip--xlarge');

        });

        it('When size prop applied, delete icon size will be changed', () => {

            // Arrange
            render(
                <>
                    <TChip size={'xsmall'} icon={'test'}>hello</TChip>
                    <TChip size={'small'} icon={'test'}>hello</TChip>
                    <TChip size={'medium'} icon={'test'}>hello</TChip>
                    <TChip size={'large'} icon={'test'}>hello</TChip>
                    <TChip size={'xlarge'} icon={'test'}>hello</TChip>
                    <TChip size={'invalid'} icon={'test'}>hello</TChip>
                </>
            );

            const chips = screen.getAllByRole('img');

            expect(chips[0]).toHaveStyle({fontSize: '12px'});
            expect(chips[1]).toHaveStyle({fontSize: '14px'});
            expect(chips[2]).toHaveStyle({fontSize: '16px'});
            expect(chips[3]).toHaveStyle({fontSize: '20px'});
            expect(chips[4]).toHaveStyle({fontSize: '24px'});
            expect(chips[5]).toHaveStyle({fontSize: '16px'});

        });

    });

    describe('Event', () => {

        it('When clicking remove icon, onRemove handler is called', async () => {

            // Arrange
            const user = userEvent.setup();

            render(<TChip onRemove={mockFn}>hello</TChip>);

            const remove = screen.getByRole('img');

            // Act
            await user.click(remove);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

        it('When remove handler is triggered, onRemove handler is called', async () => {

            // Arrange
            const chipRef = createRef<TChipRef>();

            render(<TChip ref={chipRef} onRemove={mockFn}>hello</TChip>);

            // Act
            act(() => {
                chipRef.current.remove();
            })

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

    });

});