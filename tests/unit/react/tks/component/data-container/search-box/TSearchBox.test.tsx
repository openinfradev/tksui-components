import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TSearchBox from '~/tks/component/data-container/search-box/TSearchBox';
import TSearchBoxRow from '~/tks/component/data-container/search-box/TSearchBoxRow';
import TSearchBoxItem from '~/tks/component/data-container/search-box/TSearchBoxItem';


jest.mock('~/tks/component/common/util/ColorUtil', () => ({
    shadeColor: jest.fn(() => 'blue'),
}));

describe('TSearchBox', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            render(<TSearchBox className={'class-name-prop'}>search box content</TSearchBox>);
            const root = screen.getByRole('form');

            // Assert

            expect(root)
                .toHaveClass('class-name-prop');

        });

        it('Style prop applies to root', () => {

            // Arrange
            render(<TSearchBox style={{width: '100%'}}>search box content</TSearchBox>);
            const root = screen.getByRole('form');

            // Assert

            expect(root)
                .toHaveStyle({width: '100%'});
        });

        it('Column prop applied to TSearchBoxItem width', () => {

            // Arrange
            const columnCount = 3;
            render(<>
                <TSearchBox column={columnCount}>
                    <TSearchBoxRow>
                        <TSearchBoxItem>content</TSearchBoxItem>
                    </TSearchBoxRow>
                </TSearchBox>
            </>);

            const searchBoxItem = screen.getByRole('group');

            // Assert

            expect(searchBoxItem)
                .toHaveStyle({width: `calc(100% / ${columnCount} * 1)`});
        });

        it('Apply the LabelWidth prop to adjust the width of the label in TSearchBoxItem.', () => {

            // Arrange
            const labelWidth = '120px';
            render(<>
                <TSearchBox labelWidth={labelWidth}>
                    <TSearchBoxRow>
                        <TSearchBoxItem label={'레이블'}>content</TSearchBoxItem>
                    </TSearchBoxRow>
                </TSearchBox>
            </>);

            const searchBoxItemLabel = screen.getByText('레이블');


            // Assert
            expect(searchBoxItemLabel)
                .toHaveStyle({flex: `0 0 ${labelWidth}`});
        });

    });

    describe('Event', () => {

        it('When the onSearch prop is supplied, the "조회" button should be displayed and working', async () => {

            // Arrange
            const onSearch = jest.fn(() => { /* Just test */ });

            render(<TSearchBox onSearch={onSearch}>search box content</TSearchBox>);
            const button = screen.getByRole('button');

            // Act
            await userEvent.click(button);

            // Assert
            expect(button)
                .toHaveTextContent('조회');

            expect(button)
                .toHaveClass('t-button--main');

            expect(onSearch)
                .toBeCalledTimes(1);
        });

        it('When the onSearch prop is supplied, the "조회" button should be displayed and working', async () => {

            // Arrange
            const onReset = jest.fn(() => { /* Just test */ });

            render(<TSearchBox onReset={onReset}>search box content</TSearchBox>);
            const button = screen.getByRole('button');

            // Act
            await userEvent.click(button);

            // Assert
            expect(button)
                .toHaveTextContent('초기화');

            expect(button)
                .toHaveClass('t-button--primary');

            expect(onReset)
                .toBeCalledTimes(1);
        });

    });
});
