const mapService = require('../services/maps.service');
const {validationResult} = require('express-validator'); // Importing validationResult from express-validator

module.exports.getCoordinates = async (req, res,next) => {
   const errors = validationResult(req); // Check for validation errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // Return validation errors if any
    }
   
    const { address } = req.query; // Extract the address from the query parameters
    try {
        const coordinates = await mapService.getAddressCoordinate(address); // Call the service to get coordinates
         res.status(200).json({ coordinates }); // Return the coordinates in the response
    }
    catch (error) {
         res.status(404).json({ message: 'Coordinates not found' }); // Handle errors
    }}
    module.exports.getDistanceTime = async (req, res,next) => {
        try{
            const errors = validationResult(req); // Check for validation errors
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() }); // Return validation errors if any
            }
            const { origin, destination } = req.query; // Extract the origin and destination from the query parameters
            const distanceTime = await mapService.getDistanceTime(origin, destination); // Call the service to get distance and time
            res.status(200).json({ distanceTime }); // Return the distance and time in the response
        }
        catch(err){
            console.error(err); 
            res.status(500).json({ message: 'Internal server error' }); 
        }
        
    }

    module.exports.getAutoCompleteSuggestions = async (req, res,next) => {
        try{
            const errors = validationResult(req); // Check for validation errors
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() }); // Return validation errors if any
            }
            const { input } = req.query; // Extract the input from the query parameters
            const suggestions = await mapService.getAutoCompleteSuggestions(input); // Call the service to get suggestions
            res.status(200).json({ suggestions }); // Return the suggestions in the response
        }
        catch(err){
            console.error(err); 
            res.status(500).json({ message: 'Internal server error' }); 
        }
    }