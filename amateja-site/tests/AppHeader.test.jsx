/* eslint-disable */
import { render, screen } from '@testing-library/react';
import AppHeader from '../src/AppHeader';
import { useNavigate } from 'react-router-dom';
import { vi } from 'vitest';

const mUseNavigate = vi.fn();
describe('Appheader', () => {
    
    it('renders AppHeader', () => {
        
        vi.mock('react-router-dom', async () => {
            const mod = await vi.importActual('react-router-dom');
            return {
                ...mod,
                useNavigate: () => mUseNavigate
            };
        });
        const { getByRole }  = render(<AppHeader />);
        expect(getByRole('button', {name: /Go Home/})).toBeDefined();
        expect(getByRole('button', {name: 'Home'})).toBeDefined();
        expect(getByRole('button', {name: /Resume/})).toBeDefined();
        expect(getByRole('button', {name: /Portfolio/})).toBeDefined();
        expect(getByRole('button', {name: /About/})).toBeDefined();
        expect(getByRole('button', {name: /Contact/})).toBeDefined();

        getByRole('button', {name: 'Home'}).click();
        getByRole('button', {name: /Resume/}).click();
        expect(mUseNavigate).toHaveBeenCalledTimes(2);
        screen.debug();
    })
});