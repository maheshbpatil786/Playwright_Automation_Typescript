import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

const env = process.env.TEST_ENV || 'qa';

dotenv.config({
  path: `config/${env}.env`
});

export default defineConfig({

  testDir: './tests',

  use: {

    baseURL: process.env.BASE_URL,

    headless: false,

    screenshot: 'only-on-failure',

    trace: 'on-first-retry'
  },


});