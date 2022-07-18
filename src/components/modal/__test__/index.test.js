import {render, screen} from '@testing-library/react';
import Modal from '../index';

describe('Modal Component render', () => {
    test('should render successfully with props', () => {
        render(
            <Modal 
                show={true}
                onHide={() => false }
                username={'Bret'}
                modaldata={{ 'title': 'Bret', 'url': 'https://via.placeholder.com/600/3a5c29' }}/>);
        });
});