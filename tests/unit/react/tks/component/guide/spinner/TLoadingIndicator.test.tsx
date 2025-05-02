import {render, screen} from '@testing-library/react';
import React from 'react';

import {loadingIndicatorSize, loadingIndicatorVariant, TLoadingIndicator} from '@/components';

const sizeList = Object.values(loadingIndicatorSize);
const variantList = Object.values(loadingIndicatorVariant);

describe('TToast', () => {
    describe('Style', () => {
        it('Classname prop applies to root', () => {
            // Arrange
            const testClass = 't-loading-indicator-test-class';
            render(<TLoadingIndicator className={testClass} />);

            const root = screen.getByTestId('t-loading-indicator-root');

            // Assert
            expect(root).toHaveClass(testClass);
        });

        it('Style prop applies to the root', () => {
            // Arrange
            const testStyle = {color: 'red', fontSize: '20px'};
            render(<TLoadingIndicator style={testStyle} />);

            const root = screen.getByTestId('t-loading-indicator-root');

            // Assert
            expect(root).toHaveStyle(testStyle);
        });

        it('Message prop applies to the root', () => {
            // Arrange
            const testMessage = 'test message!!!';
            render(<TLoadingIndicator message={testMessage} />);

            const root = screen.getByText(testMessage);

            // Assert
            expect(root).toHaveClass('t-loading-indicator__message');
        });

        it.each(sizeList)('Size prop applies to the root', (size) => {
            // Arrange
            render(<TLoadingIndicator size={size} />);

            const root = screen.getByTestId('t-loading-indicator-root');

            // Assert
            expect(root).toHaveClass(`t-loading-indicator--${size}`);
        });

        it.each(variantList)('Size prop applies to the root', (variant) => {
            // Arrange
            render(<TLoadingIndicator variant={variant} />);

            const root = screen.getByTestId('t-loading-indicator-root');

            // Assert
            expect(root).toHaveClass(`t-loading-indicator--${variant}`);
        });
    });
});
