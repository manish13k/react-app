import { render } from '@testing-library/react';
import { Table } from 'react-bootstrap';
import TableBody from '../tableBody';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Photo TableBody Component render', () => {
    test('Render Photo TableBody Component', () => {
        render(<Router><Table striped bordered hover size="sm" responsive><TableBody /></Table></Router>);
    });
});