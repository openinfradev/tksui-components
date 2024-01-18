import {render, screen} from '@testing-library/react';
import * as Modal from 'react-modal';
import TModal from '~/screen/modal/TModal';

describe('TDropdown', () => {

    const mockFn = jest.fn();
    let $root: HTMLDivElement;
    let $modalContainer: HTMLDivElement;

    beforeEach(() => {
        $root = document.createElement('div');
        $root.id = 'root';
        $modalContainer = document.createElement('div');
        $modalContainer.id = 'modal-div';
        document.body.appendChild($root);
        document.body.appendChild($modalContainer);
        mockFn.mockClear();
    });

    afterEach(() => {
        document.body.removeChild($root);
        document.body.removeChild($modalContainer);
    });

    describe('style', () => {

        it('renders without errors', () => {

            // Arrange
            Modal.setAppElement = () => null;
            render(
                <TModal
                    title={'Modal Title'}
                    isOpen={true}
                    onRequestClose={mockFn}
                >
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
                <TModal
                    title={'Modal Title'}
                    isOpen={true}
                    bodyClassName={modalClass}
                    onRequestClose={mockFn}
                >
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByRole('dialog');

            // Assert
            expect(modalRoot).toHaveClass(modalClass);
        });

        it('Size prop applies to root', () => {

            // Arrange
            const modalSize = 'large';
            render(
                <TModal
                    title={'Modal Title'}
                    isOpen={true}
                    onRequestClose={mockFn}
                    size={modalSize}
                >
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByRole('dialog');

            // Assert
            expect(modalRoot).toHaveClass(`t-modal__overlay__body--${modalSize}`);
        });

        it('Other Size prop applies to root', () => {

            // Arrange
            render(
                <TModal
                    title={'Modal Title'}
                    isOpen={true}
                    xlarge={true}
                    onRequestClose={mockFn}
                >
                    Modal Content
                </TModal>,
            );
            const modalRoot = screen.getByRole('dialog');

            // Assert
            expect(modalRoot).toHaveClass('t-modal__overlay__body--xlarge');
        });

        it('Children prop applies to root', () => {

            // Arrange
            const contentText = 'Modal Content';
            render(
                <TModal
                    title={'Modal Title'}
                    isOpen={true}
                    onRequestClose={mockFn}
                >
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
                <TModal
                    title={modalTitle}
                    isOpen={true}
                    onRequestClose={mockFn}
                >
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
                    isOpen={true}
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
                    isOpen={true}
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
                    isOpen={true}
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
