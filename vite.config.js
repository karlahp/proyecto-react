// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],

    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.js',

        // --- ¡AÑADE ESTA SECCIÓN! ---
        coverage: {
            provider: 'v8', // Usa el motor V8
            reporter: ['text', 'html'], // Reporte en terminal y en HTML
            reportsDirectory: './coverage', // El nombre de la carpeta
        },
        // --- FIN DE LA SECCIÓN ---
    },
})