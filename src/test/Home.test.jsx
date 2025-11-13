// src/test/Home.test.jsx

import React from 'react';
// 1. ¡Importamos fireEvent para simular clics y escritura!
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home.jsx'; // (Ruta corregida)

describe('Home Component (Página Principal)', () => {

    // --- PRUEBA 1: La que ya tenías ---
    it('debería mostrar el título "Busca tema de tu interés"', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const titulo = screen.getByText(/Busca tema de tu interés/i);
        expect(titulo).toBeInTheDocument();
    });

    // --- PRUEBA 2: ¡LA NUEVA PRUEBA! ---
    it('debería permitir al usuario escribir en el buscador y hacer clic', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        // 1. Encontrar el input (por su texto 'placeholder')
        const input = screen.getByPlaceholderText(/Buscar.../i);

        // 2. Simular escritura en el input
        // (Esto prueba tu línea 26, el 'onChange')
        fireEvent.change(input, { target: { value: 'ciencia' } });

        // 3. Validar que el input ahora tiene el valor 'ciencia'
        expect(input.value).toBe('ciencia');

        // 4. Encontrar el botón (por su rol)
        const boton = screen.getByRole('button');

        // 5. Simular clic en el botón
        // (Esto prueba tu línea 9, la función 'buscar()')
        fireEvent.click(boton);

        // (Como 'buscar()' solo hace un console.log, no podemos validar
        // mucho más, ¡pero la prueba SÍ ejecutó la línea!)
    });

});