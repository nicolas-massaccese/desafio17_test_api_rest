const { urlAtlas, database } = require('../config/config.js');


async function saveMensaje(mensaje){
    let now = getTime();
    const newMsg = { timestamp: now, ...mensaje };

    const client = connectAtlas();
    const databaseAtlas = client.db(database);
    const collectionProductos = databaseAtlas.collection("mensajes");
    try {
        const cursorAtlas = collectionProductos.insertOne(newMsg, function(err, res) {
            if (err) throw err;
            console.log(`Document inserted: ${newMsg}`);
        });
    } finally {
        await client.close();
        return newMsg;
    }
};

module.exports = {saveMensaje};