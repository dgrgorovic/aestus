import {defineConfig} from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'https://lemon-cliff-03b907503.6.azurestaticapps.net',
        headless: false,
        viewport: {width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
    
    },
    testDir: './tests',
});