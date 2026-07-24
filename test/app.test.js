const request = require('supertest');
const app = require('../app');

describe('GlobalCart API', () => {
    test('GET / should return running message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('GlobalCart API running');
    });

    test('GET /health should return ok status', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ status: 'ok' });
    });
});