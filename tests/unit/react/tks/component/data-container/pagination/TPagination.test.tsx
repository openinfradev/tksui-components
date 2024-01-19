import {act, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CSSProperties} from 'react';
import useInputState from '@/common/hook/UseInputState';
import TPagination from '~/data-container/pagination/TPagination';

jest.mock('@/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TPagination', () => {


    const Pagination = (props: {
        totalPages: number,
        className?: string,
        style?: CSSProperties,
        jumper?: boolean,
        jumperText?: string,
    }) => {
        const pageNumber = useInputState<number>(1);
        return (
            <TPagination pageNumber={pageNumber.value}
                         onChangePageNumber={pageNumber.onChange}
                         {...props}
            />
        );
    };

    describe('style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testClassName = 'class-name-prop';
            render(<Pagination totalPages={13} className={testClassName}/>);
            const root = screen.getByRole('navigation');

            // Assert
            expect(root).toHaveClass(testClassName);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testStyle = {width: '100%'};
            render(<Pagination totalPages={13} style={testStyle}/>);
            const root = screen.getByRole('navigation');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('jumper prop applies to root', async () => {

            // Arrange
            render(<Pagination jumper totalPages={13}/>);
            const jumperRoot = screen.getByTestId('pagination-jumper-root');

            // Assert
            expect(jumperRoot).toBeInTheDocument();
            expect(jumperRoot).toHaveClass('t-pagination__jumper__container');
        });

        it('jumperText prop applies to root', async () => {

            // Arrange
            const jumperText = 'Go Page';
            render(<Pagination jumper jumperText={jumperText} totalPages={13}/>);
            const jumperButtonElement = screen.getByText(jumperText);

            // Assert
            expect(jumperButtonElement).toBeInTheDocument();
        });
    });

    describe('Page button', () => {
        it('Using the previous and next buttons allows navigation to the previous or next page.', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<Pagination totalPages={13}/>);
            const nextPageIcon = screen.getByLabelText('t_navigate_right');
            const prevPageIcon = screen.getByLabelText('t_navigate_left');
            const page1Button = screen.getByRole('button', {name: '1'});
            const page2Button = screen.getByRole('button', {name: '2'});

            // Assert
            expect(page1Button)
                .toHaveClass('t-pagination__page-container__page__button--active');
            expect(page2Button)
                .not.toHaveClass('t-pagination__page-container__page__button--active');

            // Act
            await act(async () => {
                await user.click(nextPageIcon);
            });

            // Assert
            expect(page1Button)
                .not.toHaveClass('t-pagination__page-container__page__button--active');
            expect(page2Button)
                .toHaveClass('t-pagination__page-container__page__button--active');

            // Act
            await act(async () => {
                await user.click(prevPageIcon);
            });

            // Assert
            expect(page1Button)
                .toHaveClass('t-pagination__page-container__page__button--active');
            expect(page2Button)
                .not.toHaveClass('t-pagination__page-container__page__button--active');
        });


        it('When you press the number button, the button is activated', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<Pagination totalPages={13}/>);
            const page1Button = screen.getByRole('button', {name: '1'});
            const page3Button = screen.getByRole('button', {name: '3'});

            // Assert
            expect(page1Button)
                .toHaveClass('t-pagination__page-container__page__button--active');
            expect(page3Button)
                .not.toHaveClass('t-pagination__page-container__page__button--active');

            // Act
            await act(async () => {
                await user.click(page3Button);
            });

            // Assert
            expect(page1Button)
                .not.toHaveClass('t-pagination__page-container__page__button--active');
            expect(page3Button)
                .toHaveClass('t-pagination__page-container__page__button--active');
        });


    });


    describe('Navigation button', () => {

        it('When page number is equal to 1, prev(set) button is disabled', () => {

            // Arrange
            render(<Pagination totalPages={13}/>);
            const previousPageSetIcon = screen.getByLabelText('t_navigate_left_double');
            const previousPageIcon = screen.getByLabelText('t_navigate_left');


            // Assert
            expect(previousPageSetIcon).toHaveClass('t-icon--disabled');
            expect(previousPageIcon).toHaveClass('t-icon--disabled');
        });


        it('When page number is not equal to 1, prev(set) button is not disabled', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<Pagination totalPages={2}/>);
            const nextPageIcon = screen.getByLabelText('t_navigate_right');

            // Act
            await act(async () => {
                await user.click(nextPageIcon);
            });

            // Arrange
            const previousPageSetIcon = screen.getByLabelText('t_navigate_left_double');
            const previousPageIcon = screen.getByLabelText('t_navigate_left');

            // Assert
            expect(previousPageSetIcon).not.toHaveClass('t-icon--disabled');
            expect(previousPageIcon).not.toHaveClass('t-icon--disabled');
        });


        it('When page number is not equal to total pages, prev button is not disabled', () => {

            // Arrange
            render(<Pagination totalPages={2}/>);
            const nextPageSetIcon = screen.getByLabelText('t_navigate_right_double');
            const nextPageIcon = screen.getByLabelText('t_navigate_right');


            // Assert
            expect(nextPageSetIcon).not.toHaveClass('t-icon--disabled');
            expect(nextPageIcon).not.toHaveClass('t-icon--disabled');
        });


        it('When page number is equal to total pages, next(set) button is disabled', async () => {

            // Arrange
            const user = userEvent.setup();
            render(<Pagination totalPages={2}/>);
            const nextPageIcon = screen.getByLabelText('t_navigate_right');
            const nextPageSetIcon = screen.getByLabelText('t_navigate_right_double');

            // Act
            await act(async () => {
                await user.click(nextPageIcon);
            });

            // Assert
            expect(nextPageSetIcon).toHaveClass('t-icon--disabled');
            expect(nextPageIcon).toHaveClass('t-icon--disabled');
        });

        it('When page number is not equal to total pages, next(set) button is not disabled', async () => {

            // Arrange
            render(<Pagination totalPages={2}/>);
            const nextPageIcon = screen.getByLabelText('t_navigate_right');
            const nextPageSetIcon = screen.getByLabelText('t_navigate_right_double');

            // Assert
            expect(nextPageSetIcon).not.toHaveClass('t-icon--disabled');
            expect(nextPageIcon).not.toHaveClass('t-icon--disabled');
        });

        it(
            'When either the next set or previous set buttons are pressed, both the page range and the current page will be updated.',
            async () => {

                // Arrange
                const user = userEvent.setup();
                render(<Pagination totalPages={13}/>);
                const nextPageSetIcon = screen.getByLabelText('t_navigate_right_double');
                const prevPageSetIcon = screen.getByLabelText('t_navigate_left_double');

                let pageButtons = screen.getAllByRole('button');

                // Assert
                expect(pageButtons[0])
                    .toHaveClass('t-pagination__page-container__page__button--active');

                expect(pageButtons[0]).toHaveAccessibleName('1');

                // Act
                // next set (range 1-10 -> 11-13, current 1 -> 11)
                await act(async () => {
                    await user.click(nextPageSetIcon);
                });

                // Assert
                pageButtons = screen.getAllByRole('button');
                expect(pageButtons[0])
                    .toHaveClass('t-pagination__page-container__page__button--active');

                expect(pageButtons[0])
                    .toHaveAccessibleName('11');

                // Act
                // prev set (range 11-13 -> 1-10, current 11 -> 10)
                await act(async () => {
                    await user.click(prevPageSetIcon);
                });

                // Assert
                pageButtons = screen.getAllByRole('button');
                expect(pageButtons[0])
                    .not.toHaveClass('t-pagination__page-container__page__button--active');
                expect(pageButtons[9])
                    .toHaveClass('t-pagination__page-container__page__button--active');
                expect(pageButtons[0])
                    .toHaveAccessibleName('1');

            },
        );

        it(
            'When either the next set or previous set buttons are pressed, both the page range and the current page will be updated.',
            async () => {

                // Arrange
                const user = userEvent.setup();
                render(<Pagination totalPages={5}/>);
                const nextPageSetIcon = screen.getByLabelText('t_navigate_right_double');
                const prevPageSetIcon = screen.getByLabelText('t_navigate_left_double');

                let pageButtons = screen.getAllByRole('button');

                // Assert
                expect(pageButtons[0])
                    .toHaveClass('t-pagination__page-container__page__button--active');

                expect(pageButtons[0])
                    .toHaveAccessibleName('1');

                // Act
                // next set (range 1-5 not changed, current 1 to last page 5)
                await act(async () => {
                    await user.click(nextPageSetIcon);
                });

                // Assert
                pageButtons = screen.getAllByRole('button');
                expect(pageButtons[0])
                    .not.toHaveClass('t-pagination__page-container__page__button--active');
                expect(pageButtons[4])
                    .toHaveClass('t-pagination__page-container__page__button--active');

                expect(pageButtons[4])
                    .toHaveAccessibleName('5');

                // Act
                // next set (range 1-5 not changed, current 5 to first page 1)
                await act(async () => {
                    await user.click(prevPageSetIcon);
                });

                // Assert
                pageButtons = screen.getAllByRole('button');
                expect(pageButtons[0])
                    .toHaveClass('t-pagination__page-container__page__button--active');
                expect(pageButtons[4])
                    .not.toHaveClass('t-pagination__page-container__page__button--active');

                expect(pageButtons[0])
                    .toHaveAccessibleName('1');

            },
        );


    });

    describe('Jumper', () => {

        it('Jumper area allows input and button click', async () => {

            // Arrange
            const user = userEvent.setup();
            const testPageNumber = '7';
            render(<Pagination jumper totalPages={13}/>);
            const jumperButtonElement = screen.getByText('바로가기');
            const numberFieldElement = screen.getByTestId('number-field-input-root');

            // Act
            await act(async () => {
                await user.click(numberFieldElement);
                await user.clear(numberFieldElement);
                await user.keyboard(testPageNumber);
                await user.click(jumperButtonElement);
            });
            const activePageNumberButton = screen.getByText(testPageNumber);

            // Assert
            expect(activePageNumberButton)
                .toHaveClass('t-pagination__page-container__page__button--active');
        });

        it('If you enter an invalid page number, an error appears in the Number field.', async () => {

            // Arrange
            const user = userEvent.setup();
            const invalidNumber = '0';
            render(<Pagination jumper totalPages={13}/>);
            const jumperButtonElement = screen.getByText('바로가기');
            const numberFieldInputElement = screen.getByTestId('number-field-input-root');

            // Act
            await act(async () => {
                await user.click(numberFieldInputElement);
                await user.clear(numberFieldInputElement);
                await user.keyboard(invalidNumber);
                await user.click(jumperButtonElement);
            });
            const failureElement = screen.getByTestId('number-field-root');

            // Assert
            expect(failureElement).toHaveClass('t-number-field--failure');
        });

        it('If the page number changes, the jumper number field number also changes.', async () => {

            // Arrange
            const user = userEvent.setup();
            const targetNumberPage = '7';
            render(<Pagination jumper totalPages={13}/>);
            const targetPageNumberElement = screen.getByText(targetNumberPage);

            // Act
            await act(async () => {
                await user.click(targetPageNumberElement);
            });
            const numberFieldInputElement: HTMLInputElement = screen.getByTestId('number-field-input-root');

            // Assert
            expect(numberFieldInputElement?.value).toBe(targetNumberPage);
        });

    });


});
