import {render, screen} from '@testing-library/react';
import TableBody from '../tableBody';
import { Table } from 'react-bootstrap';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Album TableBody Component render', () => {

    test('should render tablebody with rotuter and table', () => {
        render(<Router><Table><tbody><TableBody /></tbody></Table></Router>);
    });

    test('should render album component successfully with props data and match text with props', async () => {
        const albumData = [
            {
              "userId": 1,
              "id": 1,
              "title": "quidem molestiae enim"
            }
          ]

        const userdata = [
            {
              "id": 1,
              "name": "Leanne Graham",
              "username": "Bret",
              "email": "Sincere@april.biz",
              "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
                }
              },
              "phone": "1-770-736-8031 x56442",
              "website": "hildegard.org",
              "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
              }
            }]

        await render(<Router><Table><tbody><TableBody responseData={albumData} userdata={userdata}/></tbody></Table></Router>);
        expect(screen.getByText('Bret')).toBeInTheDocument();
        expect(screen.getByText('quidem molestiae enim')).toBeInTheDocument();
    });
});