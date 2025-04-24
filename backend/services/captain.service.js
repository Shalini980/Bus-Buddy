const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname, lastname, email, password, plate, capacity,busno
}) => {
    if (!firstname || !email || !password || !busno || !plate || !capacity) {
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        bus: {
            plate,
            capacity,
            busno
        }
    })

    return captain;
}