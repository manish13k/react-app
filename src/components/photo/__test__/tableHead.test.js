import {render, screen} from '@testing-library/react';
import { Table } from 'react-bootstrap';
import TableHead from '../tableHead';

describe('Photo Table Head Component render', () => {
    test('Render Photo TableHead Component', () => {
        render(<Table><TableHead /></Table>);
        expect(screen.getByText('Image')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
    });
});