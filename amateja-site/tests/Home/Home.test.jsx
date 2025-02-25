/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/Home/Home';

describe('Home', () => {
    it('renders the Home page', () => {
        const {getByText} = render(<Home />);

        expect(getByText(/Aster Mateja/)).toBeDefined();
        expect(getByText(/software engineer/)).toBeDefined();
    });
});