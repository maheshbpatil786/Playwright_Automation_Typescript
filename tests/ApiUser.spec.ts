import { test, expect } from '@playwright/test';
import { UserAPI } from '../api/UserAPI';

test('verify get user api', async ({ request }) => {

    const userApi = new UserAPI(request);

    const response = await userApi.getUser(1);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);

    expect(responseBody.name).toBe('Leanne Graham');
});