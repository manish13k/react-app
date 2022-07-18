import {render, screen} from '@testing-library/react';
import { Table } from 'react-bootstrap';
import Pagination from '../index';
import {BrowserRouter as Router} from 'react-router-dom';
import { AlbumAPI } from '../../../services/apiUrls';

describe('Render Pagination Component', () => {

    test('should be present text in pagination component ', () => {
        render(<Router><Table><tbody><Pagination /></tbody></Table></Router>);
        expect(screen.getByText('Show Record:')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
        expect(screen.getByText('previous')).toBeInTheDocument();
        expect(screen.getByText('next')).toBeInTheDocument();
    });

    test('should render pagination component with props', () => {
        render(<Router><Table><tbody><Pagination apiUrl={AlbumAPI} pageUrl={`/`} /></tbody></Table></Router>);
    });
});