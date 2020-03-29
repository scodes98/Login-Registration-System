const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//Login
router.get('/', forwardAuthenticated, (req, res) => res.render('login'));

//Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
    res.render('dashboard', {
        user: req.user
    })
);

module.exports = router;  //so that we can use router in other files
