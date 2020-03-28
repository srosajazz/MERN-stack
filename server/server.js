const express = require('express');

const app = express();

app.get('/api/signup', (req, res) => {
    res.json({
        data: 'You pressed signup endpoint test',
    })
});

const port = process.env.port || 8001;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});