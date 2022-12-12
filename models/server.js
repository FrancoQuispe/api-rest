const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
const userRouter = require("../routes/usuario");

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PUERTO;
        this.usuarioPath = '/api/usuarios';

        //coneccion con la base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // rutas de la aplicacion
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        // CORS
        this.app.use(cors());

         // lectura y parseo del body
         this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuarioPath, userRouter);
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;