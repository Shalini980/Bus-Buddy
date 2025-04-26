const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const captainSchema = new mongoose.Schema({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3,'First name should be at least 3 characters'],    
        },
        lastname:{
            type: String,
            minlength: [3,'Last name should be at least 3 characters']
        }
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]
    },
    password:{
        type: String,
        required: true,
        minlength: [6,'Password should be at least 6 characters'],
        select: false
    },
    socketId: {
        type: String,
        unique: true,  // Add this explicitly
        sparse: true   // Critical: allows multiple nulls
    },
    bus:{
        plate:{
            type: String,
            required: true,
            minlength: [3,'Plate number should be at least 3 characters'],
        },
        busno:{
            type: String,
            required: true,
        },
        capacity:{
            type: Number,
            required: true,
            min: [1,'Capacity should be at least 1'],
            max: [100,'Capacity should not exceed 100']
        }
    },
    location:{
        lat: {
            type: Number,
        },
        lng:{
            type: Number,
        }
    },
    status:{
        type: String,
        enum: ['active','inactive'],
        default: 'active'
    },
})
captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}


captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel;