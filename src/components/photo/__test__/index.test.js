import {render, screen} from '@testing-library/react';
import Photo from '../index';
import {BrowserRouter as Router} from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { PhotoAPI } from '../../../services/apiUrls';
import Pagination from '../../pagination';
import TableBody from '../tableBody';

describe('Photo Component render', () => {
    test('Render Album Photo', () => {
        render(<Router><Photo /></Router>);
        expect(screen.getByText('Photo Page')).toBeInTheDocument();
    });
});

describe('Photo Table Body Component render', () => {
    test('Render Photo Table Body Component', async () => {
        const albumData = [
            {
              "albumId": 5,
              "id": 201,
              "title": "nesciunt dolorum consequatur ullam tempore accusamus debitis sit",
              "url": "https://via.placeholder.com/600/250289",
              "thumbnailUrl": "https://via.placeholder.com/150/250289"
            },
          ]

        render(<Router><Table striped bordered hover size="sm" responsive><tbody><TableBody responseData={albumData} username={'Bret'}/></tbody></Table></Router>);
    });
});

describe(' Render Pagination From Photo Page Component render', () => {
    test('Render Pagination Component', () => {
        render(<Router><Table striped bordered hover size="sm" responsive><tbody><Pagination apiUrl={`${PhotoAPI}?albumId=${1}`} pageUrl={`/photo`} /></tbody></Table></Router>);
    });
});