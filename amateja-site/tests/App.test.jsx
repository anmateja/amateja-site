/* eslint-disable */
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { vi } from 'vitest';
import emailjs from '@emailjs/browser';
import { BrowserRouter, useNavigate } from 'react-router-dom';

const mInit = vi.fn();
const mUseNavigate = vi.fn();
describe('App', () => {
    it('renders the App', () => {
        vi.mock('@emailjs/browser', async () => {
            const mod = await vi.importActual('@emailjs/browser');
            return {
                ...mod,
                init: () => mInit
            };
        });

        vi.mock('react-router-dom', async () => {
            const mod = await vi.importActual('react-router-dom');
            return {
                ...mod,
                useNavigate: () => mUseNavigate
            };
        });

        const {getByText} = render(
        <BrowserRouter>
            <App />
        </BrowserRouter>);
        screen.debug();

        // ensure default page (Home) is rendered
        expect(getByText(/software engineer/)).toBeDefined();
    });
});