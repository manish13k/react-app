import {render, screen} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('renders react component', async () => {
    await act(() => {
        render(<App />);
    });
    
    const divElement = screen.getByTestId('main-app');
    expect(divElement).toBeInTheDocument();
});