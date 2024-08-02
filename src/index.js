const express = require('express');
const app = express();
const router = require('./routes'); // Correctly import the router

const PORT = 5000;

app.use(express.json()); // Use this for JSON body parsing
app.use('/', router); // Correctly use the router

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
