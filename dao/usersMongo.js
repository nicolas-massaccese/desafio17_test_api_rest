const mongoose = require('mongoose')
const User = require('../models/usersSchema');
const { mongoUri } = require('../config/enviroment');


class MongoClient {
    async connect() {
        // connect to the database
        await mongoose.connect(mongoUri);
    };

    
    
    getAllUsers = async () => {
        const users = await User.find({})
        return users
    };
    
    addSingleUser = async () => {
        const newUser = new User(user);
        await newUser.save();
        return user;
    };
    
    getUserById = async (id) => {
        const user = await User.findById(id);
        return user;
    };
}

module.exports = MongoClient;
