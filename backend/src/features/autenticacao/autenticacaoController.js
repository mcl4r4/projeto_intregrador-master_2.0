import { UsuarioModel } from "../usuarios/usuarioModel.js";
import { createUserToken } from "../../shared/functions/createUserToken.js";
import bcrypt from "bcrypt";

export const login = async (request, response) => {
    const { email, senha } = request.body;

    try {
        if (!email) {
            response.status(400).json({ menssage: "Campo email obrigátorio" })
            return;
        }
        if (!senha) {
            response.status(400).json({ menssage: "Campo senha obrigátorio" })
            return;
        }

        const encontrarUsuario = await UsuarioModel.findOne({ where: { email } })

        if (!encontrarUsuario) {
            response.status(404).json({ menssage: "Credenciais inválidas" })
        }

        const comparaSenha = bcrypt.compareSync(senha, encontrarUsuario.senha);
        if (!comparaSenha) {
            response.status(404).json({ menssage: "Credenciais inválidas" })
        }

        response.status(200).json({ menssage: "Autenticação feita com sucesso!", encontrarUsuario })

        await createUserToken(encontrarUsuario, request, response)
        
    } catch (error) {
        console.log(error)
        response.status(500).json({ menssage: "Erro interno do servidor" })
    }
}