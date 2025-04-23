const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const blacklistTokenmodel = require('../models/blacklistToken.model');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email.'),
    body('password').isLength({min:6}).withMessage('Password must contain more than 6 characters.'),
    body('studentid').isLength({min:8}).withMessage('Invalid Student Id.'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
],
    userController.registerUser
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email.'),
    body('password').isLength({min:6}).withMessage('Password must contain more than 6 characters.'),
],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

router.get('/logout', authMiddleware.authUser, async(req, res) => {
    res.clearCookie('token'); // Clear the cookie
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenmodel.create({ token }); // Add the token to the blacklist
    res.status(200).json({ message: 'Logged out successfully' });
})

module.exports = router;