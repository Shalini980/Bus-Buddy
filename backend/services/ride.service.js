const rideModel = require('../models/ride.model');
//const mapService = require('./map.service');

module.exports.createRide = async ({user,pickup,destination}) => {
    if (!user || !pickup || !destination) {
        throw new Error('All Fields are required');
    }
    const ride = await rideModel.create({
        user,
        pickup,
        destination,
    })
    return ride;
}
