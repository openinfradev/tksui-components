import {act, render, renderHook, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useRef} from 'react';
import TChip from '~/input/chip/TChip';

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

        it('Fill prop applies to root', () => {

            // Arrange
            render(<TChip fill>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveClass('t-chip--fill');
        });

        it('Outlined prop applies to root', () => {

            // Arrange
            render(<TChip outlined>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveClass('t-chip--outlined');
        });

        it('When type prop is set to filled, root has t-chip--fill class', () => {

            // Arrange
            render(<TChip type={'fill'}>hello</TChip>);
            const chip = screen.getByTestId('t-chip-root');

            // Assert
            expect(chip).toHaveClass('t-chip--fill');
        });

        it('When type prop is set to outlined, root has t-chip--outlined class', () => {

            // Arrange
            render(<TChip type={'outlined'}>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveClass('t-chip--outlined');
        });

        it('When prevIcon prop is applied, it should be displayed on content area', () => {

            // Arrange
            const importedIcon = 'chips';
            render(<TChip prevIcon={importedIcon}>hello</TChip>);
            const root = screen.getByText(importedIcon);

            // Assert
            expect(root).toHaveTextContent(importedIcon);
        });

        it('When icon prevIconColor is applied, it should be displayed on content area', () => {

            // Arrange
            const importedIcon = 'chips';
            const testColor = 'red';
            render(<TChip prevIcon={importedIcon} prevIconColor={'red'}>hello</TChip>);
            const root = screen.getByText(importedIcon);

            // Assert
            expect(root).toHaveStyle({color: testColor});
        });

        it('When icon prevIconSize is applied, it should be displayed on content area', () => {

            // Arrange
            const importedIcon = 'chips';
            const testIconSize = 'xlarge';
            render(<TChip prevIcon={importedIcon} prevIconSize={testIconSize}>hello</TChip>);
            const root = screen.getByText(importedIcon);

            // Assert
            expect(root).toHaveClass(`t-icon--${testIconSize}`);
        });

        it(
            'When onRemove prop applied, removeIcon is visible',
            async () => {

                // Arrange
                render(<TChip onRemove={mockFn}>TChip</TChip>);
                const removeIconElement = screen.getByRole('img');

                // Assert
                expect(removeIconElement).toBeInTheDocument();

                // Assert
            },
        );

    });

    describe('Event', () => {

        it('When remove handler is triggered, onRemove handler is called', async () => {

            // Arrange
            const {result} = renderHook(() => useRef(null));
            const chipRef = result.current;

            render(<TChip ref={chipRef} onRemove={mockFn}>hello</TChip>);

            // Act
            act(() => {
                chipRef.current.remove();
            });

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);

        });

    });

});
