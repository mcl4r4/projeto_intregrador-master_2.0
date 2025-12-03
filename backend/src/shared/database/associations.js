import { UsuarioModel } from "../../features/usuarios/usuarioModel.js";
import { publicacaoModel } from "../../features/publicacoes/publicacaoModel.js";

publicacaoModel.belongsTo(UsuarioModel, {foreignKey:"usuarioId"})
UsuarioModel.hasMany(publicacaoModel, {foreignKey:"usuarioId"})

export {UsuarioModel, publicacaoModel}