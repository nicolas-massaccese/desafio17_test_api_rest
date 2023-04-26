const { persistence } = require('../config/enviroment');
const MemoryDao = require('./usersMemory');
const MongoDao = require('./usersMongo');

let dao = undefined;

const getDao = async () => {
    if(!dao) {
        dao = persistence === 'MEMORY' ? new MemoryDao() : new MongoDao( );
        await dao.connect()
    }
    return dao;
} 

module.exports = getDao;