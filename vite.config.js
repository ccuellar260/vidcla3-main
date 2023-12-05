import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';
import glob from 'glob';

const jsFiles = glob.sync('resources/js/**/*.js');
const cssFiles = glob.sync('resources/css/**/*.css');

export default defineConfig({
    plugins: [
        laravel({
            input: [
                ...jsFiles,
                ...cssFiles,
            ],
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**',
            ],
        }),
    ],
});
