import {render, screen} from '@testing-library/react';
import { Table } from 'react-bootstrap';
import Paginate from '../index';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Pagination Component render', () => {
    test('Render Pagination Component', () => {
        render(<Router><Table striped bordered hover size="sm" responsive><tbody><Paginate /></tbody></Table></Router>);
        expect(screen.getByText('Show Record:')).toBeInTheDocument();
        expect(screen.getByText('20')).toBeInTheDocument();
        expect(screen.getByText('30')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
        expect(screen.getByText('previous')).toBeInTheDocument();
        expect(screen.getByText('next')).toBeInTheDocument();
    });
});