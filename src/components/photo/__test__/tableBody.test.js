import { render, screen } from '@testing-library/react';
import { Table } from 'react-bootstrap';
import TableBody from '../tableBody';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Photo TableBody Component render', () => {
    test('should render component successfully', () => {
        render(<Router><Table><TableBody /></Table></Router>);
    });

    test('should render component with props successfully', async () => {
        const text = "nesciunt dolorum consequatur ullam tempore accusamus debitis sit";
        const albumData = [
            {
              "albumId": 5,
              "id": 201,
              "title": text,
              "url": "https://via.placeholder.com/600/250289",
              "thumbnailUrl": "https://via.placeholder.com/150/250289"
            },
          ]

        render(<Router><Table><tbody><TableBody responseData={albumData} username={'Bret'}/></tbody></Table></Router>);
        expect(screen.getByText(text)).toBeInTheDocument();
    });
});