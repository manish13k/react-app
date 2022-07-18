import {render, screen} from '@testing-library/react';
import ErrorBoundary from '../index';

describe('Error Boundary Component render', () => {
    test('should render error component successfully and match text', () => {
        const text = 'Page has 500 Error';
        render(<ErrorBoundary>{text}</ErrorBoundary >);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});

