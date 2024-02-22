import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';

createInertiaApp({
    title: (title) => title ? `${title} - Cat Shop` : 'Cat Shop',
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<StrictMode><App {...props} /></StrictMode>);
    },
    progress: {
        color: '#4B5563',
        delay: 5000,
        showSpinner: true,
    },
});
