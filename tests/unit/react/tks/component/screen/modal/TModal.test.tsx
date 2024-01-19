import {render, screen} from '@testing-library/react';
import * as Modal from 'react-modal';
import TModal from '~/screen/modal/TModal';
import {modalSize as modalSizeList} from '@/components';

const sizeList = Object.values(modalSizeList);

describe('TDropdown', () => {

    const mockFn = jest.fn();
    let root: HTMLDivElement;
    let modalContainer: HTMLDivElement;

    beforeEach(() => {
        root = document.createElement('div');
        modalContainer = document.createElement('div');

        root.id = 'root';
        modalContainer.id = 'modal-div';

        document.body.appendChild(root);
        document.body.appendChild(modalContainer);

        mockFn.mockClear();
    });

    afterEach(() => {
        document.body.removeChild(root);
        document.body.removeChild(modalContainer);
    });

    describe('style', () => {

        it('renders without errors', () => {

            // Arrange
            Modal.setAppElement = () => null;
            render(
                <TModal title={'Modal Title'} isOpen onRequestClose={mockFn}>
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByRole('dialog');

            // Assert
            expect(modalRoot).toBeInTheDocument();
        });

        it('Classname prop applies to root', () => {

            // Arrange
            const modalClass = 'modal-classname';
            render(
                <TModal title={'Hi'} isOpen bodyClassName={modalClass} onRequestClose={mockFn}>
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByRole('dialog');

            // Assert
            expect(modalRoot).toHaveClass(modalClass);
        });

        it('Id prop applies to root', () => {

            // Arrange
            const modalId = 'modal-id-test';
            render(
                <TModal title={'Hi'} isOpen id={modalId} onRequestClose={mockFn}>
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByRole('dialog');

            // Assert
            expect(modalRoot).toHaveAttribute('id', modalId);
        });


        it.each(sizeList)('All size prop applies to root ', (size) => {

            // Arrange
            render(
                <TModal title={'Hi'} isOpen onRequestClose={mockFn} size={size}>
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByRole('dialog');

            // Assert
            expect(modalRoot).toHaveClass(`t-modal__overlay__body--${size}`);
        });

        it.each(sizeList)('All sizes in the boolean type are applies to the root', (size) => {

            // Arrange
            const sizeProp = {};
            sizeProp[size] = true;
            render(
                <TModal title={'Hi'} isOpen onRequestClose={mockFn} {...sizeProp}>
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByRole('dialog');

            // Assert
            expect(modalRoot).toHaveClass(`t-modal__overlay__body--${size}`);
        });

        it('Children prop applies to root', () => {

            // Arrange
            const contentText = 'Modal Content';
            render(
                <TModal title={'Modal Title'} isOpen onRequestClose={mockFn}>
                    {contentText}
                </TModal>,
            );
            const modalRoot = screen.getByText(contentText);

            // Assert
            expect(modalRoot).toBeInTheDocument();
        });

        it('Title prop applies to root', () => {

            // Arrange
            const modalTitle = 'Modal Title Test';
            render(
                <TModal title={modalTitle} isOpen onRequestClose={mockFn}>
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByText(modalTitle);

            // Assert
            expect(modalRoot).toBeInTheDocument();
        });

        it('Header, Footer prop applies to root', () => {

            // Arrange
            const headerContent = 'Header Content';
            const footerContent = 'Footer Content';
            const Header = () => <div>{headerContent}</div>;
            const Footer = () => <div>{footerContent}</div>;
            render(
                <TModal
                    title={'Modal Title'}
                    isOpen
                    onRequestClose={mockFn}
                    header={<Header/>}
                    footer={<Footer/>}
                >
                    Modal Content
                </TModal>,
            );
            const modalHeaderRoot = screen.getByText(headerContent);
            const modalFooterRoot = screen.getByText(footerContent);

            // Assert
            expect(modalHeaderRoot).toBeInTheDocument();
            expect(modalFooterRoot).toBeInTheDocument();
        });

        it('ContentLabel prop applies to root', () => {

            // Arrange
            const ContentLabel = 'Content Label!';
            render(
                <TModal
                    title={'Modal Title'}
                    isOpen
                    onRequestClose={mockFn}
                    contentLabel={ContentLabel}
                >
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByLabelText(ContentLabel);

            // Assert
            expect(modalRoot).toBeInTheDocument();
        });

        it('TestId prop applies to root', () => {

            // Arrange
            const testId = 't-modal-testId-test';
            render(
                <TModal
                    title={'Modal Title'}
                    isOpen
                    onRequestClose={mockFn}
                    testId={testId}
                    contentLabel={testId}
                >
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByTestId(testId);

            // Assert
            expect(modalRoot).toBeInTheDocument();
        });
    });

});
