const express = require('express');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// routes
const toursRoute = require('./routes/v1/tours.routes');

// posting to database
app.use('/api/v1', toursRoute);

app.get('/', (req, res) => {
    res.send('Route is working!very fine!');
});

module.exports = app;
