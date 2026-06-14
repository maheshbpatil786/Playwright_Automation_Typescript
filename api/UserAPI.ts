// api/UserAPI.ts

import { APIRequestContext } from '@playwright/test';

export class UserAPI {

    constructor(private request: APIRequestContext) {}

    async getUser(userId: number) {

        return await this.request.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
    }
}