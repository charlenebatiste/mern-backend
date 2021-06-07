// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;

// Models

// controllers
const test = async (req, res) => {
    res.json({ message: 'User endpoint OK!' });
}

// routes
router.get('/test', test);

// POST api/users/register (Public)
// router.post('/signup', signup);

// POST api/users/login (Public)
// router.post('/login', login);

// GET api/users/current (Private)
// router.get('/profile', passport.authenticate('jwt', { session: false }), profile);
// router.get('/all-users', fetchUsers);

module.exports = router;