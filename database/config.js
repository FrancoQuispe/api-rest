const mongoose = require('mongoose');

const dbConnection = async() =>{

    mongoose.set('strictQuery', true);

    try {

        await mongoose.connect(process.env.RUTA);
        console.log('Base de datos online');
        
    } catch (error) {

        console.log(error);
        throw new Error('Error a la hora de inicar la base de datos');

    }

}

module.exports = {
    dbConnection
}