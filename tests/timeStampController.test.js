const request = require('supertest');
const app = require('../server');

describe('Time Stamp Service', () => {
    describe('Get TimeStamp', () => {
       
        it('End Point is GET /api/timestamp/:date_string?', async () => {
            const res = await request(app).get('/api/timestamp/2016-11-20');
            
            expect(res.statusCode).toEqual(200);
       });
    })
});