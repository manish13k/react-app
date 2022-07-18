import {render, screen} from '@testing-library/react';
import Album from '../index';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Album Component render', () => {
    test('should render album component successfully and match text', () => {
        render(<Router><Album /></Router>);
        expect(screen.getByText('Album Page')).toBeInTheDocument();
    });
});


