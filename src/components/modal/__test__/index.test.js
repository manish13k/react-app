import {render, screen} from '@testing-library/react';
import Modal from '../index';

describe('Modal Component render', () => {
    test('Render Modal Component', () => {
        render(<Modal />);
    });
});