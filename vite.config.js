import laravel from 'laravel-vite-plugin'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        build: {
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        if (id.includes('node_modules')) return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        },
        plugins: [
            laravel({
                refresh: [
                    'resources/views/**/*.blade.php',      // Laravel Blade views
                    'resources/views/**/*.antlers.html', // Statamic Antlers templates (if using)
                    'content/**/*.{md,mdx}',               // Statamic content changes
                ],
                input: [
                    'resources/css/site.scss',
                    'resources/js/site.js',
                ]
            })
        ],
        server: {
            open: env.APP_URL
        }
    }
});
