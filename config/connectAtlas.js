
const { MongoClient, ServerApiVersion } = require('mongodb');
const { urlAtlas, database } = require('../config/config.js');


function connectAtlas(){
    const client = new MongoClient(
        urlAtlas,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
        }
    );
    return client;
}

module.exports = {connectAtlas}