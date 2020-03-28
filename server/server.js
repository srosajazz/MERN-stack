const express = require('express');

const app = express();

//import routes
const authRoutes = require('./routes/auth');

//Middleware
app.use('/api', authRoutes);


const port = process.env.port || 8001;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});