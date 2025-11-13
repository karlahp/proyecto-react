// src/test/setup.js
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Limpia el DOM simulado después de cada prueba ('it')
afterEach(() => {
    cleanup();
});