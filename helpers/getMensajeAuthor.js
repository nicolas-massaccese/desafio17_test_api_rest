const { connectAtlas } = require('../config/connectAtlas');

const { urlAtlas, database } = require('../config/config.js');

const { logger } = require('../config/loggerConf.js');



async function getMensajeAuthor(url, method, msgAutor, mensaje){


    const client = connectAtlas();
    const databaseAtlas = client.db(database);
    const collectionMensajes = databaseAtlas.collection("mensajes");


    try {
        const query = { autor: msgAutor };
        const result = await collectionMensajes.findOne(query);
        if(result == null){
            mensaje.push( { error: `NO EXISTE ${msgAutor} EN LA BASE` } );
            logger.error(`En la Ruta ${method} ${url} NO EXISTE ${msgAutor} EN LA BASE`);

        } else {
            mensaje.push(result);
        }
    } finally {
        await client.close();
    }

};

module.exports = { getMensajeAuthor };