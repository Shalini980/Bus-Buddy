const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controller/user.controller');
// const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email.'),
    body('password').isLength({min:6}).withMessage('Password must contain more than 6 characters.'),
    body('studentid').isLength({min:8}).withMessage('Invalid Student Id.'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
],
    userController.registerUser
)

module.exports = router;