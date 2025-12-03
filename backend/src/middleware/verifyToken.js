import { getToken } from "../shared/functions/getToken.js";
import jwt from "jsonwebtoken";

export async function verifyToken(request, response, next) {
    try {
        if (!request.headers.authorization) {
            const err = new Error(
                "O cabeçalho 'Authorization' é obrigatório e deve conter um token Bearer"
            );
            err.statusCode = 401;
            throw err;
        }

        const token = getToken(request);
        if (!token) {
            const err = new Error(
                "Esperado formato: 'Bearer <token>'. Verifique se o token esta presente e corretamente formatado"
            );
            err.statusCode = 401;
            throw err;
        }

        let verified;
        try {
            verified = jwt.verify(token, "SENHA123COD");
            console.log(verified);
        } catch (jwtError) {
            let message;
            if (jwtError.name === "TokenExpiredError") {
                message = "Token expirado. Por favor, faça login novamente";
            } else if (jwtError.name === "JsonWebTokenError") {
                message =
                    "Token inválido. O token fornecido está mal formatado, corrompido ou não é confiável";
            } else {
                message = "Erro ao validar o token";
            }

            const err = new Error(message);
            err.statusCode = 401;
            throw err;
        }
        request.usuario = verified
        next();
    } catch (error) {
        next(error);
    }
}
