const userModel = require('../models/user.model');
module.exports.createUser= async({
    firstname,lastname, email, password,studentid
})=>
{
    if(!firstname || !email || !password || !studentid)
    {
        throw new Error('All fields are required.');
    }
    const user=userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        studentid
    }) 
    return user;
}