import {render, screen} from '@testing-library/react';
import Photo from '../index';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Photo Component render', () => {
    test('should render component successfully and match text', () => {
        render(<Router><Photo /></Router>);
        expect(screen.getByText('Photo Page')).toBeInTheDocument();
    });
});