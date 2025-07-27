import {act, fireEvent, render, renderHook, screen} from '@testing-library/react';
import {useRef} from 'react';

import TChip from '~/input/chip/TChip';

describe('TChip', () => {
    const mockFn = jest.fn();
    const mockOnClick = jest.fn();

    beforeEach(() => {
        mockFn.mockClear();
        mockOnClick.mockClear();
    });

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

        it('When no type prop is provided, defaults to outlined style', () => {
            // Arrange
            render(<TChip>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveClass('t-chip--outlined');
        });

        it('When type prop takes precedence over outlined and fill props', () => {
            // Arrange
            render(<TChip type={'fill'} outlined>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveClass('t-chip--fill');
            expect(root).not.toHaveClass('t-chip--outlined');
        });

        it('When prevIcon prop is applied, it should be displayed on content area', () => {
            // Arrange
            const importedIcon = 'chips';
            render(<TChip prevIcon={importedIcon}>hello</TChip>);
            const iconElement = screen.getByText(importedIcon);

            // Assert
            expect(iconElement).toBeInTheDocument();
            expect(iconElement.closest('.t-chip__prev-icon')).toBeInTheDocument();
        });

        it('When icon prevIconColor is applied, it should be displayed on content area', () => {
            // Arrange
            const importedIcon = 'chips';
            const testColor = 'red';
            render(
                <TChip prevIcon={importedIcon} prevIconColor={'red'}>
                    hello
                </TChip>
            );
            const root = screen.getByText(importedIcon);

            // Assert
            expect(root).toHaveStyle({color: testColor});
        });

        it('When icon prevIconSize is applied, it should be displayed on content area', () => {
            // Arrange
            const importedIcon = 'chips';
            const testIconSize = 'xlarge';
            render(
                <TChip prevIcon={importedIcon} prevIconSize={testIconSize}>
                    hello
                </TChip>
            );
            const root = screen.getByText(importedIcon);

            // Assert
            expect(root).toHaveClass(`t-icon--${testIconSize}`);
        });

        it('When prevIconSize is not provided, defaults to xsmall', () => {
            // Arrange
            const importedIcon = 'chips';
            render(<TChip prevIcon={importedIcon}>hello</TChip>);
            const iconElement = screen.getByText(importedIcon);

            // Assert
            expect(iconElement).toHaveClass('t-icon--xsmall');
        });

        it('When onRemove prop applied, removeIcon is visible', async () => {
            // Arrange
            render(<TChip onRemove={mockFn}>TChip</TChip>);
            const removeIconElement = screen.getByText('close');

            // Assert
            expect(removeIconElement).toBeInTheDocument();
            expect(removeIconElement.closest('.t-chip__remove-icon')).toBeInTheDocument();
        });

        it('When onRemove prop is not provided, removeIcon is not visible', () => {
            // Arrange
            render(<TChip>TChip</TChip>);
            const removeIconElement = screen.queryByText('close');

            // Assert
            expect(removeIconElement).not.toBeInTheDocument();
        });

        it('Label content is displayed correctly', () => {
            // Arrange
            const testContent = 'Test Chip Content';
            render(<TChip>{testContent}</TChip>);
            const labelElement = screen.getByText(testContent);

            // Assert
            expect(labelElement).toBeInTheDocument();
            expect(labelElement.closest('.t-chip__label')).toBeInTheDocument();
        });

        it('Has correct base class', () => {
            // Arrange
            render(<TChip>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toHaveClass('t-chip');
        });
    });

    describe('Event', () => {
        it('When remove handler is triggered via ref, onRemove handler is called', async () => {
            // Arrange
            const {result} = renderHook(() => useRef(null));
            const chipRef = result.current;

            render(
                <TChip ref={chipRef} onRemove={mockFn}>
                    hello
                </TChip>
            );

            // Act
            act(() => {
                chipRef.current.remove();
            });

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);
        });

        it('When remove icon is clicked, onRemove handler is called', () => {
            // Arrange
            render(<TChip onRemove={mockFn}>hello</TChip>);
            const removeIcon = screen.getByText('close');

            // Act
            fireEvent.click(removeIcon);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);
        });

        it('When remove icon is clicked, event propagation is stopped', () => {
            // Arrange
            render(<TChip onRemove={mockFn} onClick={mockOnClick}>hello</TChip>);
            const removeIcon = screen.getByText('close');

            // Act
            fireEvent.click(removeIcon);

            // Assert
            expect(mockFn).toHaveBeenCalledTimes(1);
            expect(mockOnClick).not.toHaveBeenCalled();
        });

        it('When chip root is clicked, onClick handler is called', () => {
            // Arrange
            render(<TChip onClick={mockOnClick}>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Act
            fireEvent.click(root);

            // Assert
            expect(mockOnClick).toHaveBeenCalledTimes(1);
        });

        it('When chip root is clicked, event propagation is stopped', () => {
            // Arrange
            const parentClickHandler = jest.fn();
            render(
                <div onClick={parentClickHandler}>
                    <TChip onClick={mockOnClick}>hello</TChip>
                </div>
            );
            const root = screen.getByTestId('t-chip-root');

            // Act
            fireEvent.click(root);

            // Assert
            expect(mockOnClick).toHaveBeenCalledTimes(1);
            expect(parentClickHandler).not.toHaveBeenCalled();
        });

        it('When no onClick handler is provided, clicking does not cause errors', () => {
            // Arrange
            render(<TChip>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Act & Assert
            expect(() => fireEvent.click(root)).not.toThrow();
        });

        it('When no onRemove handler is provided but ref.remove is called, does not cause errors', () => {
            // Arrange
            const {result} = renderHook(() => useRef(null));
            const chipRef = result.current;

            render(<TChip ref={chipRef}>hello</TChip>);

            // Act & Assert
            expect(() => {
                act(() => {
                    chipRef.current.remove();
                });
            }).not.toThrow();
        });

        it('When onClick is undefined, clicking root does not cause errors', () => {
            // Arrange
            render(<TChip onClick={undefined}>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Act & Assert
            expect(() => fireEvent.click(root)).not.toThrow();
        });

        it('When onRemove is undefined, clicking remove icon does not cause errors', () => {
            // Arrange
            render(<TChip onRemove={undefined}>hello</TChip>);
            const removeIcon = screen.queryByText('close');

            // Assert - onRemove가 undefined면 remove icon이 렌더링되지 않음
            expect(removeIcon).not.toBeInTheDocument();
        });

        it('When onRemove is undefined but ref.remove is called, does not cause errors', () => {
            // Arrange
            const {result} = renderHook(() => useRef(null));
            const chipRef = result.current;

            render(<TChip ref={chipRef} onRemove={undefined}>hello</TChip>);

            // Act & Assert
            expect(() => {
                act(() => {
                    chipRef.current.remove();
                });
            }).not.toThrow();
        });
    });

    describe('Optional Chaining Safety', () => {
        it('Handles undefined onClick handler safely', () => {
            // Arrange
            render(<TChip onClick={undefined}>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Act & Assert
            expect(() => fireEvent.click(root)).not.toThrow();
        });

        it('Handles undefined onRemove handler safely via ref', () => {
            // Arrange
            const {result} = renderHook(() => useRef(null));
            const chipRef = result.current;

            render(<TChip ref={chipRef} onRemove={undefined}>hello</TChip>);

            // Act & Assert
            expect(() => {
                act(() => {
                    chipRef.current.remove();
                });
            }).not.toThrow();
        });

        it('Handles null onClick handler safely', () => {
            // Arrange
            render(<TChip onClick={null}>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Act & Assert
            expect(() => fireEvent.click(root)).not.toThrow();
        });

        it('Handles null onRemove handler safely via ref', () => {
            // Arrange
            const {result} = renderHook(() => useRef(null));
            const chipRef = result.current;

            render(<TChip ref={chipRef} onRemove={null}>hello</TChip>);

            // Act & Assert
            expect(() => {
                act(() => {
                    chipRef.current.remove();
                });
            }).not.toThrow();
        });
    });

    describe('Accessibility', () => {
        it('Has correct test id', () => {
            // Arrange
            render(<TChip>hello</TChip>);
            const root = screen.getByTestId('t-chip-root');

            // Assert
            expect(root).toBeInTheDocument();
        });

        it('Remove icon has correct accessibility attributes', () => {
            // Arrange
            render(<TChip onRemove={mockFn}>hello</TChip>);
            const removeIcon = screen.getByText('close');

            // Assert
            expect(removeIcon.closest('.t-icon')).toHaveClass('t-icon--clickable');
        });
    });

    describe('Ref functionality', () => {
        it('Ref exposes remove method', () => {
            // Arrange
            const {result} = renderHook(() => useRef(null));
            const chipRef = result.current;

            render(<TChip ref={chipRef} onRemove={mockFn}>hello</TChip>);

            // Assert
            expect(chipRef.current).toHaveProperty('remove');
            expect(typeof chipRef.current.remove).toBe('function');
        });

        it('Ref remove method works without onRemove prop', () => {
            // Arrange
            const {result} = renderHook(() => useRef(null));
            const chipRef = result.current;

            render(<TChip ref={chipRef}>hello</TChip>);

            // Act & Assert
            expect(() => {
                act(() => {
                    chipRef.current.remove();
                });
            }).not.toThrow();
        });
    });
});
