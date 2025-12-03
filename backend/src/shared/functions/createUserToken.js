import jwt from 'jsonwebtoken';

const senhaToken = 'SENHA123COD'

export const createUserToken = async (usuario, request, response) => {
    const token = jwt.sing(
        {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            tipo: usuario.tipo
        },
        senhaToken,
        {expiresIn: "1d"}
    );

    response.status(200).json({menssage: "Você está autenticado", token, usuarioID: usuario.id,})
}