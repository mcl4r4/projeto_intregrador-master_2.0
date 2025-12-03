import jwt from "jsonwebtoken";
import {UsuarioModel} from '../../features/usuarios/usuarioModel.js';

export const getUserByToken = async (token) => {
    if(!token){
        const err = new Error("Token de autenticação não fornecido")
        err.statusCode = 401;
        throw err;
    }

    try {
        const decoded = jwt.verify(token , "SENHA123COD");
        if(!decoded.id){
            const err = new Error("Formato do token inválido");
            err.statusCode = 401;
            throw err;
        }

        const usuario = await UsuarioModel.findByPk(decoded.id, {
            attributes:{exclude: ["senha"]},

        })

        if(!usuario){
            const err = new Error("Usuário não encontrado ou foi removido");
            err.statusCode= 401;
            throw err;
        }

        return usuario;
    } catch (error) {
        throw error
    }
}