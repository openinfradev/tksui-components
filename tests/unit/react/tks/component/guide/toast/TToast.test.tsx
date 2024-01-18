import React from 'react';
import {render, screen} from '@testing-library/react';
import TToast, {notify} from '~/guide/toast/TToast';

describe('TToast', () => {

    describe('Render', () => {

        it('Renders normal message without errors', async () => {

            // Arrange
            const message = 'test message'

            render(<TToast/>);
            notify(message);

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();

        });

        it('Render success message without errors', async () => {

            // Arrange
            const message = 'test message'

            render(<TToast/>);
            notify.success(message);

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();

        });

        it('Render error message without errors', async () => {

            // Arrange
            const message = 'test message'

            render(<TToast/>);
            notify.error(message);

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();

        });

        it('Render warning message without errors', async () => {

            // Arrange
            const message = 'test message'

            render(<TToast/>);
            notify.warn(message);

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();

        });

        it('Render info message without errors', async () => {

            // Arrange
            const message = 'test message'

            render(<TToast/>);
            notify.info(message);

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();

        });

        describe('Content', () => {

            it('When normal toast rendered, it should be displayed message on message area', async () => {

                // Arrange
                const message = 'test message'

                render(<TToast/>);
                notify(message);

                const toastElement = await screen.findByText(message);

                // Assert
                expect(toastElement).toHaveTextContent(message);

            });

            it('When success toast rendered, it should be displayed message on message area', async () => {

                // Arrange
                const message = 'test message'

                render(<TToast/>);
                notify.success(message);

                const toastElement = await screen.findByText(message);

                // Assert
                expect(toastElement).toHaveTextContent(message);

            });

            it('When error toast rendered, it should be displayed message on message area', async () => {

                // Arrange
                const message = 'test message'

                render(<TToast/>);
                notify.error(message);

                const toastElement = await screen.findByText(message);

                // Assert
                expect(toastElement).toHaveTextContent(message);

            });

            it('When warning toast rendered, it should be displayed message on message area', async () => {

                // Arrange
                const message = 'test message'

                render(<TToast/>);
                notify.warn(message);

                const toastElement = await screen.findByText(message);

                // Assert
                expect(toastElement).toHaveTextContent(message);

            });

            it('When info toast rendered, it should be displayed message on message area', async () => {

                // Arrange
                const message = 'test message'

                render(<TToast/>);
                notify.info(message);

                const toastElement = await screen.findByText(message);

                // Assert
                expect(toastElement).toHaveTextContent(message);

            });
        })
    })

});