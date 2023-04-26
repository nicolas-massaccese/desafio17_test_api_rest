const { connectAtlas } = require('../config/connectAtlas');

const { urlAtlas, database } = require('../config/config.js');

const { logger } = require('../config/loggerConf.js');



async function getMensaje(url, method, mensajes){

    const client = connectAtlas();
    const databaseAtlas = client.db(database);
    const collectionMensajes = databaseAtlas.collection("mensajes");

    try {
        const cursorAtlas = collectionMensajes.find();

        if ((await cursorAtlas.countDocuments) === 0) {
            mensajes.push( {error: "NO EXISTEN MENSAJES EN LA BASE"} );
            logger.error(`En la Ruta ${method} ${url} NO EXISTEN MENSAJES EN LA BASE`);
        } else {
            await cursorAtlas.forEach(element => mensajes.push(element));
        }
    } finally {
        await client.close();
    }

};

module.exports = { getMensaje };