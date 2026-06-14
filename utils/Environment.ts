import dotenv from 'dotenv';

const env = process.env.TEST_ENV || 'qa';

dotenv.config({
    path: `config/${env}.env`,
    override: true
});

export const ENV = {
    BASE_URL: process.env.BASE_URL || '',
    USERNAME: process.env.USERNAME || '',
    PASSWORD: process.env.PASSWORD || ''
};