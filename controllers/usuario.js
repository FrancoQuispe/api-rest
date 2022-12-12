const usuarioService = require("../services/usuario");
 
exports.getAllUsers = async (req, res) => {
  try {
    const users = await usuarioService.usuariosGet();
    res.json({ data: users, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.createUser = async (req, res) => {
  try {
    const user = await usuarioService.usuarioCreate(req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getUserById = async (req, res) => {
  try {
    const user = await usuarioService.usuarioById(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateUser = async (req, res) => {
  try {
    const user = await usuarioService.usuarioUpdate(req.params.id, req.body);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteUser = async (req, res) => {
  try {
    const user = await usuarioService.usuarioDelete(req.params.id);
    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};