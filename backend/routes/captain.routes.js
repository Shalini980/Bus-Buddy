const captainController = require('../controller/captain.controller');
const express = require('express');
const router = express.Router();
const {body} =require("express-validator")
const { authCaptain } = require('../middlewares/auth.middleware');
router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name should be at least 3 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters'), 
    body('bus.plate').isLength({ min: 3 }).withMessage('Plate number should be at least 3 characters'),
    body('bus.busno').notEmpty().withMessage('Bus number is required'),
    body('bus.capacity').isInt({ min: 1, max: 100 }).withMessage('Capacity should be between 1 and 100'),
],
    captainController.registerCaptain 
)

router.post('/login', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password should be at least 6 characters'), 
],
    captainController.loginCaptain 
)

router.get('/profile', authCaptain, captainController.getCaptainProfile);

router.get('/logout', authCaptain, captainController.logoutCaptain)

module.exports = router;