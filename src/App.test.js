import {render, screen} from '@testing-library/react';
import App from './App';

test('renders react component', () => {
    render(<App />);
    const divElement = screen.getByTestId('main-app');
    expect(divElement).toBeInTheDocument();
});