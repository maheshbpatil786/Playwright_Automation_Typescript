import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const env = process.env.TEST_ENV || 'qa';

dotenv.config({
    path: `config/${env}.env`,
    override: true
});

export default defineConfig({
    fullyParallel: true,

    workers: 3,
    testDir: './tests',
    reporter: [
        ['html'],
        ['allure-playwright']
    ],

    use: {
        baseURL: process.env.BASE_URL,
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'on-first-retry'
    },

    projects: [

        {
            name: 'setup',
            testMatch: /.*auth\.setup\.ts/
        },

        {
            name: 'chromium',
            dependencies: ['setup'],
            use: {
                ...devices['Desktop Chrome'],
                storageState: '.auth/user.json'
            }
        },

        {
            name: 'firefox',
            dependencies: ['setup'],
            use: {
                ...devices['Desktop Firefox'],
                storageState: '.auth/user.json'
            }
        },

        {
            name: 'webkit',
            dependencies: ['setup'],
            use: {
                ...devices['Desktop Safari'],
                storageState: '.auth/user.json'
            }
        }

    ]
});