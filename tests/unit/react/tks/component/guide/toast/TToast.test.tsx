import {act, render, screen} from '@testing-library/react';
import React from 'react';

import TToast, {notify} from '~/guide/toast/TToast';

describe('TToast', () => {
    describe('Style', () => {
        it('Renders without errors', async () => {
            // Arrange
            const message = 'test message';

            render(<TToast />);

            await act(async () => {
                notify(message);
            });

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();
        });
    });

    describe('Event', () => {
        it('When normal toast rendered, it should be displayed message on message area', async () => {
            // Arrange
            const message = 'test message';

            render(<TToast />);

            await act(async () => {
                notify(message);
            });

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();
            expect(toastElement).toHaveTextContent(message);
        });

        it('When success toast rendered, it should be displayed message on message area', async () => {
            // Arrange
            const message = 'test message';

            render(<TToast />);

            await act(async () => {
                notify.success(message);
            });

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();
            expect(toastElement).toHaveTextContent(message);
        });

        it('When error toast rendered, it should be displayed message on message area', async () => {
            // Arrange
            const message = 'test message';

            render(<TToast />);

            await act(async () => {
                notify.error(message);
            });

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();
            expect(toastElement).toHaveTextContent(message);
        });

        it('When warning toast rendered, it should be displayed message on message area', async () => {
            // Arrange
            const message = 'test message';

            render(<TToast />);

            await act(async () => {
                notify.warn(message);
            });

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();
            expect(toastElement).toHaveTextContent(message);
        });

        it('When info toast rendered, it should be displayed message on message area', async () => {
            // Arrange
            const message = 'test message';

            render(<TToast />);

            await act(async () => {
                notify.info(message);
            });

            const toastElement = await screen.findByText(message);

            // Assert
            expect(toastElement).toBeInTheDocument();
            expect(toastElement).toHaveTextContent(message);
        });
    });
});
