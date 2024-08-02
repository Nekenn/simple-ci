const request = require('supertest');
const express = require('express');
const router = require('../src/routes'); // Adjust the path if necessary

const app = express();
app.use(express.json()); // To handle JSON request bodies
app.use('/', router);

describe('POST /say', () => {

    it('should return a welcome message if age is above 18', async () => {
        const res = await request(app)
            .post('/say')
            .send({ name: 'John', age: 20 });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Welcome John, you have the right access here.');
    });

    it('should return an access denied message if age is 18 or below', async () => {
        const res = await request(app)
            .post('/say')
            .send({ name: 'Jane', age: 17 });

        expect(res.statusCode).toEqual(403);
        expect(res.body).toHaveProperty('message', "You don't have access here, sorry !!");
    });

    it('should return a 400 error if name or age is not provided', async () => {
        const res = await request(app)
            .post('/say')
            .send({ age: 20 }); // Missing 'name'

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'Name and age are required!');
    });

    it('should return a 400 error if age is not provided', async () => {
        const res = await request(app)
            .post('/say')
            .send({ name: 'John' }); // Missing 'age'

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'Name and age are required!');
    });

    it('should return a 400 error if no data is provided', async () => {
        const res = await request(app)
            .post('/say')
            .send({}); // Missing both 'name' and 'age'

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('message', 'Name and age are required!');
    });
});
