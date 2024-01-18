import {render, screen} from '@testing-library/react';
import TBadge from '~/guide/badge/TBadge';


describe('TBadge', () => {

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop'

            render(<TBadge content={1} className={testData}>icon</TBadge>);

            const root = screen.getByTestId('t-badge-root')

            // Assert
            expect(root).toHaveClass(testData)

        })

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};

            render(<TBadge content={1} style={testData}>icon</TBadge>);

            const root = screen.getByTestId('t-badge-root')

            // Assert
            expect(root).toHaveStyle(testData)

        })

        it('ID prop applies to root', () => {

            // Arrange
            const testData = 'test-id';

            render(<TBadge content={1} id={testData}>icon</TBadge>);

            const root = screen.getByTestId('t-badge-root')

            // Assert
            expect(root).toHaveProperty('id');
            expect(root.id).toEqual(testData);

        })

        it('Dot props applies to badge',() => {

            // Arrange
            const testData = 't-badge-content--dot';
            render(<TBadge content={1} dot>icon</TBadge>);

            const content = screen.queryByTestId('t-badge-content')

            // Assert
            expect(content).toHaveClass(testData)
            expect(content).toHaveTextContent('')

        })

        it('Inline props applies to badge',() => {

            // Arrange
            render(<TBadge content={1} inline>icon</TBadge>);

            const content = screen.getByTestId('t-badge-content')

            // Assert
            expect(content).toHaveClass('t-badge-content--inline')

        })

        it('Color props applies to badge',() => {

            // Arrange
            const testData = 'blue';

            render(<TBadge content={1} color={testData}>icon</TBadge>);

            const content = screen.getByTestId('t-badge-content')

            // Assert
            expect(content).toHaveStyle({backgroundColor: testData})

        })


    })

    describe('Content', () => {

        it('When children prop applied, it should be displayed content area',() => {

            // Arrange
            const testData = 'test Message';

            render(<TBadge content={0} children={testData}/>);

            const content = screen.getByText(testData)

            // Assert
            expect(content).toHaveTextContent(testData)

        })

        it('When content prop is greater than max prop, it should be displayed on content area', () => {

            // Arrange
            const testData = 2
            const maximum = 1

            render(<TBadge content={testData} max={maximum}>icon</TBadge>);

            const content = screen.getByTestId('t-badge-content')

            // Assert
            expect(content).toHaveTextContent(`${maximum}+`)

        })

        it('When content prop is less than max prop, it should be displayed max+ on content area', () => {

            // Arrange
            const testData = 1
            const maximum = 2

            render(<TBadge content={testData} max={maximum}>icon</TBadge>);

            const content = screen.getByTestId('t-badge-content')

            // Assert
            expect(content).toHaveTextContent(`${testData}`)

        })


        it('When content prop is equals to 0, it should not be displayed on content area', () => {

            // Arrange
            render(<TBadge content={0}>icon</TBadge>);

            const content = screen.queryByTestId('t-badge-content')

            // Assert
            expect(content).not.toBeInTheDocument()

        })

        it('When ShowZero prop is applied, it should be displayed 0 on content area', () => {

            // Arrange
            render(<TBadge content={0} showZero>icon</TBadge>);

            const content = screen.getByTestId('t-badge-content')

            // Assert
            expect(content).toBeInTheDocument()

        })

    })
})