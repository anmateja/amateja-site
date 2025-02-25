/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Resume from '../../src/pages/Resume/Resume';

describe('Resume', () => {
    it('renders the Resume page', () => {
        const {getByText} = render(<Resume />);

        expect(getByText(/Aster Mateja/)).toBeDefined();
    });
});