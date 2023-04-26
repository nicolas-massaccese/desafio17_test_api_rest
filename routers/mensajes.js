const Router = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { logger } = require('../config/loggerConf.js');


const { urlAtlas, database } = require('../config/config.js');


// helpers
const { getMensaje } = require('../helpers/getMensaje.js')
const { getMensajeAuthor } = require('../helpers/getMensajeAuthor.js')

// function connectAtlas(){
//     const client = new MongoClient(
//         urlAtlas,
//         {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         serverApi: ServerApiVersion.v1
//         }
//     );
//     return client;
// }

const mensajesApiRouter = new Router()

mensajesApiRouter.get('/api/mensajes', async (req, res) => {
    const {url, method} = req;

    let mensajes=[];

    getMensaje(url, method);
    
    logger.info(`Ruta ${method} ${url} implementadas`);
    res.send(mensajes);
});

mensajesApiRouter.get('/api/mensajes/:msgAutor', async (req, res) => {
    const { msgAutor } = req.params;

    const {url, method} = req;
    
    let mensaje=[];

    getMensajeAuthor(url, method, msgAutor, mensaje);

    logger.info(`Ruta ${method} ${url} implementadas`);
    res.send(mensaje);
});

mensajesApiRouter.post('/api/mensajes', (req, res) => {
    const {url, method} = req;

    logger.info(`Ruta ${method} ${url} implementadas`);
    res.send("ALTA de Mensaje");
});

mensajesApiRouter.post('/api/mensajes/:id', (req, res) => {
    const {url, method} = req;

    logger.info(`Ruta ${method} ${url} implementadas`);
    res.send("ACTUALIZACION de Mensaje");
});

mensajesApiRouter.delete('/api/mensajes/:id', (req, res) => {
    const {url, method} = req;

    logger.info(`Ruta ${method} ${url} implementadas`);
    res.send("ELIMINACION de Mensaje");
});


async function getMensajes(){
    const client = connectAtlas();
    const databaseAtlas = client.db(database);
    const collectionProductos = databaseAtlas.collection("mensajes");


    let mensajes=[];
    try {
        const options = {
            sort: { name: 1 }, // sort returned documents in ascending order by name (A->Z).
        };
        const cursorAtlas = collectionProductos.find({},options);

        if ((await cursorAtlas.countDocuments) === 0) {
            productos.push( {error: "NO EXISTEN MENSAJES EN LA BASE"} );
            logger.error("NO EXISTEN MENSAJES EN LA BASE");
        } else {
            await cursorAtlas.forEach(element => mensajes.push(element));
        }
    } finally {
        await client.close();
    }
    return mensajes;
}






module.exports = { mensajesApiRouter, getMensajes };