import {render, screen} from '@testing-library/react';
import { Table } from 'react-bootstrap';
import Album from '../index';
import {BrowserRouter as Router} from 'react-router-dom';
import { AlbumAPI } from '../../../services/apiUrls';
import Pagination from '../../pagination';


describe('Album Component render', () => {
    test('Render Album Component', () => {
        render(<Router><Album /></Router>);
        expect(screen.getByText('Album Page')).toBeInTheDocument();
    });
});


describe(' Render Pagination From Album Page Component render', () => {
    test('Render Pagination Component', () => {
        render(<Router><Table striped bordered hover size="sm" responsive><tbody><Pagination apiUrl={AlbumAPI} pageUrl={`/`} /></tbody></Table></Router>);
    });
});

