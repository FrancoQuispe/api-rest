const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo:{
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    celular:{
        type: String
    },
    DNI:{
        type: String,
    },
    direccion:{
        type: String
    },
    rol:{
        type: String,
        emun: ['ADMIN_ROL', 'USER_ROL']
    }
})


module.exports = model('Usuario',usuarioSchema);