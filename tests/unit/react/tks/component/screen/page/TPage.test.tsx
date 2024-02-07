import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {contentDirection, TPage} from '@/components';


const contentDirectionList = Object.values(contentDirection);

describe('TPage', () => {

    Object.defineProperties(MouseEvent.prototype, {
        pageX: {
            get() {
                return this.clientX;
            },
        },
        pageY: {
            get() {
                return this.clientY;
            },
        },
    });

    describe('Style', () => {

        it('Classname prop applies to root', () => {

            // Arrange
            const testData = 'class-name-prop';

            render(<TPage className={testData}>Content</TPage>);

            const root = screen.getByTestId('t-page-root');

            // Assert
            expect(root).toHaveClass(testData);

        });

        it('Style prop applies to root', () => {

            // Arrange
            const testData = {width: '50px'};

            render(<TPage style={testData}>Content</TPage>);

            const root = screen.getByTestId('t-page-root');

            // Assert
            expect(root).toHaveStyle(testData);
        });

        it.each(contentDirectionList)('ContentDirection (%s) is applies to content area', (direction) => {
            // Arrange
            render(<TPage contentDirection={direction}>Content</TPage>);

            const contentArea = screen.getByRole('article');

            // Assert
            expect(contentArea).toHaveClass(`t-page__content-area--direction-${direction}`);
        });
    });


    describe('Event', () => {

        it('When resizer is moved, root has t-page--resizing class', async () => {

            // Arrange
            const user = userEvent.setup();

            render(<TPage infoPanelContent={'test info content'}>Content</TPage>);

            const root = screen.getByTestId('t-page-root');
            const icon = screen.getByRole('img', {name: 'info'});

            // Act
            await user.click(icon);

            // Arrange
            const resizer = screen.getByTestId('t-page-information-area-resizer');

            // Act
            await user.pointer([
                {keys: '[MouseLeft>]', target: resizer},
                {coords: {x: window.innerWidth - 700, y: 100}, target: document.body},
            ]);

            // Assert
            expect(root).toHaveClass('t-page--resizing');

            // Act
            await user.pointer({keys: '/[MouseLeft]'});

        });

        it('When the space between content and panel is less than 200 px, the width of info title will be changed', async () => {

            // Arrange
            const defaultPanelWidth = '360px';

            const user = userEvent.setup();

            render(<TPage infoPanelContent={'test info content'}>Content</TPage>);

            const icon = screen.getByRole('img', {name: 'info'});

            // Act
            await user.click(icon);

            // Arrange
            const resizer = screen.queryByTestId('t-page-information-area-resizer');


            // Act
            await user.pointer([
                {keys: '[MouseLeft>]', target: resizer},
                {coords: {x: window.innerWidth - 700, y: 100}, target: document.body},
                {keys: '[/MouseLeft]'},
            ]);

            const informationArea = screen.getByTestId('t-page-information-area');

            // Assert
            expect(informationArea).toHaveClass('t-page__information-area--visible');
            expect(informationArea).not.toHaveStyle({flex: `0 0 ${defaultPanelWidth}`});

        });

        it('When the space between content and panel is less than 700 px, information area should be invisible', async () => {

            // Arrange
            const user = userEvent.setup();

            render(<TPage infoPanelContent={'test info content'}>Content</TPage>);

            const icon = screen.getByRole('img', {name: 'info'});

            // Act
            await user.click(icon);

            // Arrange
            const resizer = screen.getByTestId('t-page-information-area-resizer');

            // Act
            await user.pointer([
                {keys: '[MouseLeft>]', target: resizer},
                {coords: {x: window.innerWidth - 200, y: 100}, target: document.body},
                {keys: '[/MouseLeft]'},
            ]);

            const informationArea = screen.getByTestId('t-page-information-area');

            // Assert
            expect(informationArea).toHaveClass('t-page__information-area--invisible');

        });


        it('When clicking info panel icon, information area has t-page__information-area--visible class and flex style', async () => {

            // Arrange
            const infoContent = 'test information data';

            const user = userEvent.setup();

            render(<TPage infoPanelContent={infoContent}>Content</TPage>);

            const icon = screen.getByRole('img', {name: 'info'});

            // Act
            await user.click(icon);

            // Arrange
            const informationArea = screen.getByTestId('t-page-information-area');

            // Assert
            expect(informationArea).toHaveClass('t-page__information-area--visible');

        });

        it('When clicking close icon, information pannel will be closed', async () => {

            // Arrange
            const infoContent = 'test information data';

            const user = userEvent.setup();

            render(<TPage infoPanelContent={infoContent}>Content</TPage>);

            const icon = screen.getByRole('img', {name: 'close'});

            const beforeInfoArea = screen.getByTestId('t-page-information-area');

            // Assert
            expect(beforeInfoArea).toHaveClass('t-page__information-area--invisible');

            // Act
            await user.click(icon);

            // Arrange
            const afterInfoArea = screen.getByTestId('t-page-information-area');

            // Assert
            expect(afterInfoArea).toHaveClass('t-page__information-area--invisible');

        });

        it('When info panel opened and clicking info panel icon, information content should be displayed on information area', async () => {

            // Arrange
            const infoContent = 'test information data';

            const user = userEvent.setup();

            render(<TPage infoPanelContent={infoContent}>Content</TPage>);

            const icon = screen.getByRole('img', {name: 'info'});

            const beforeInfoArea = screen.getByTestId('t-page-information-area');

            // Act
            await user.click(icon);

            // Assert
            expect(beforeInfoArea).toHaveClass('t-page__information-area--visible');

            // Act
            await user.click(icon);

            // Arrange
            const afterInfoArea = screen.getByTestId('t-page-information-area');

            // Assert
            expect(afterInfoArea).toHaveClass('t-page__information-area--invisible');

        });

    });

    describe('Content', () => {

        it('When children prop applied, it should be displayed on content area', () => {

            // Arrange
            const pageContent = 'test content';

            render(<TPage>{pageContent}</TPage>);

            const root = screen.getByText(pageContent);

            // Assert
            expect(root).toHaveTextContent(pageContent);

        });

        it('When title prop applied, it should be displayed on title area', () => {

            // Arrange
            const pageTitle = 'Test Title';

            render(<TPage title={pageTitle}>Content</TPage>);

            const title = screen.getByText(pageTitle);

            // Assert
            expect(title).toHaveTextContent(pageTitle);

        });

        it('When infoPanelContent prop applied, it should be displayed on content area', () => {

            // Arrange
            const infoContent = 'test info content';

            render(<TPage infoPanelContent={infoContent}>Content</TPage>);

            const title = screen.getByText(infoContent);

            // Assert
            expect(title).toHaveTextContent(infoContent);

        });

        it('When infoPanelContent prop applied, icon should be displayed on content area', () => {

            // Arrange
            const infoContent = 'test info content';

            render(<TPage infoPanelContent={infoContent}>Content</TPage>);

            const informationIcon = screen.getByRole('img', {name: 'info'});
            const closeIcon = screen.getByRole('img', {name: 'close'});

            // Assert
            expect(informationIcon).toBeInTheDocument();
            expect(closeIcon).toBeInTheDocument();

        });

    });

});
