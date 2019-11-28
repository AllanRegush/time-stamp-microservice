const request = require('supertest');
const app = require('../server');

describe('Time Stamp Service', () => {
    
    describe('Get TimeStamp', () => {
       
        it('End Point is GET /api/timestamp/:date_string?', async () => {
            const res = await request(app).get('/api/timestamp/2016-11-20');
            expect(res.statusCode).toEqual(200);
       });

       it('When making a request with no params the service returns current time stamp' , async () => {

            const res = await request(app).get('/api/timestamp/');
            const currentDate = new Date();
            const delay = 5;
            expect(res.body.unix).toBeLessThan(currentDate.getTime());
            expect(res.body.unix).toBeGreaterThanOrEqual(currentDate.getTime() - delay);
            expect(res.body.utc).toBe(currentDate.toUTCString());
       });

       it('When making a request with an invaild string the response is returned invaild', async () => {
            const res = await request(app).get('/api/timestamp/abcdefg');
            expect(res.body.unix).toBe(null);
            expect(res.body.utc).toBe('Invalid Date');

       });
    });


});