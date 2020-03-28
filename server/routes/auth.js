const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.json({
        data: 'You pressed signup endpoint',
    })
});

module.exports = router;