const express=require('express');
const router=express.Router();
const authMiddleware=require('../middlewares/auth.middleware')//middleware for authentication
const mapController=require('../controller/map.controller')//controller for ride
const {query}=require('express-validator')//validator for userud,pickup location,destination

router.get(
    '/get-coordinates', 
    query('address').isString().isLength({min:3}).withMessage(' Address must be at least 3 characters long'), // Validate address query parameter
    authMiddleware.authUser, 
    mapController.getCoordinates
);
router.get(
    '/get-distance-time',
    query('origin').isString().isLength({min:3}).withMessage('Origin must be at least 3 characters long'), // Validate origin query parameter
    query('destination').isString().isLength({min:3}).withMessage('Destination must be at least 3 characters long'), // Validate destination query parameter
    authMiddleware.authUser,
    mapController.getDistanceTime // Call the controller method to get distance and time
)

router.get(
    '/get-suggestions',
    query('input').isString().isLength({min:3}).withMessage('Input must be at least 3 characters long'), // Validate input query parameter  
    authMiddleware.authUser, // Middleware to check if user is authenticated
    mapController.getAutoCompleteSuggestions // Call the controller method to get suggestions
)
module.exports=router; // Export the router for use in other parts of the application