const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

//import routes
const authRoutes = require('./routes/auth');

//app Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(cors()); // allows all origins
if ((process.env.NODE_ENV = 'development')) {
    app.use(cors({ origin: `http://localhost: 3000` }));
}

//Middleware
app.use('/api', authRoutes);


const port = process.env.PORT || 3335;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});