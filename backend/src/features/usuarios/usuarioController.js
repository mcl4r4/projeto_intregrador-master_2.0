import { UsuarioModel } from "./usuarioModel.js";
import bcrypt from "bcrypt";
import {createUserToken} from "../../shared/functions/createUserToken.js"

export const cadastrarUsuario = async (request, response, next) => {
    const { nome, email, senha, tipo } = request.body;

    try {
        if (!nome) {
            const err = new Error("Campo nome obrigatório")
            err.statusCode = 400
            throw err;
        }
        if (!email) {
            const err = new Error("Campo email obrigatório")
            err.statusCode = 400
            throw err;
        }
        if (!senha) {
         const err = new Error("Campo senha obrigatório")
            err.statusCode = 400
            throw err;
        }
        if (!tipo) {
          const err = new Error("Campo tipo obrigatório")
            err.statusCode = 400
            throw err;
        }
        const salt = bcrypt.genSaltSync(12);
        const passwordHash = bcrypt.hashSync(senha, salt);

        const novoUsuario = await UsuarioModel.create({
            nome,
            email,
            senha: passwordHash,
            tipo
        })


        response.status(201).json({ message: "Usuário criado com sucesso!" })

         await createUserToken(novoUsuario, request, response)

    } catch (error) {
        next(error)
    }

}