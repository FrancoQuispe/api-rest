const Usuario = require('../models/usuario');

exports.usuariosGet = async () => {
    return await Usuario.find();
};

exports.usuarioCreate = async (user) => {
    return await Usuario.create(user);
};

exports.usuarioById = async (id) => {
    return await Usuario.findById(id);
};

exports.usuarioUpdate = async (id, user) => {
return await Usuario.findByIdAndUpdate(id, user);
};

exports.usuarioDelete = async (id) => {
    return await Usuario.findByIdAndDelete(id);
};