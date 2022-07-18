import {render, screen} from '@testing-library/react';
import { Table } from 'react-bootstrap';
import TableHead from '../tableHead';

describe('Table Head Component render', () => {

    test('should render album head component successfully with match text with props', () => {
        render(<Table striped bordered hover size="sm" responsive><TableHead /></Table>);
        expect(screen.getByText('Image')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Username')).toBeInTheDocument();
    });
});