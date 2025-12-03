import { publicacaoModel } from "./publicacaoModel.js";
import { getToken } from "../../shared/functions/getToken.js"
import { getUserByToken } from "../../shared/functions/getUserByToken.js"


export const criarPublicacao = async (request, response, next) => {
    const { conteudo } = request.body;

    try {
        if (!conteudo) {
            const err = new Error("campo conteudo obrigátorio")
            err.statusCode = 400
            throw err
        }

        const token = await getToken(request);
        const usuario = await getUserByToken(token);
        console.log(usuario);

        const publicacao = await publicacaoModel.create({
            conteudo,
            usuarioId: usuario.id
        })

        response.status(201).json({ message: "Criado com sucesso" }, publicacao)
    } catch (error) {
        next(error)
    }
}

export const listarPublicacoes = async (request, response, next) => {
    const page = request.query.page || 1;
    const pageSize = request.query.pageSize || 20;
    const order = request.query.order || "DESC";
    const offset = (page - 1) * pageSize;

    try {
        const { count, rows: publicacoes } = await publicacaoModel.findAndCountAll({
            attributes: ["id", "conteudo"],
            order: [["created_at", order]],
            limit: pageSize,
            offset: offset,
            include: {
                association: "usuario",
                attributes: ["nome"],
            },
        })

        console.log(count, publicacoes)

        const totalPages = Math.ceil(count / page);
        const hasNextPage = page < totalPages;
        const hasPreviusPage = page > 1;

        response.status(200).json({
            success: true,
            pagination: {
                currentPage: page,
                pageSize: pageSize,
                totalItens: count,
                totalPages: totalPages,
                hasNextPage: hasNextPage,
                hasPreviusPage: hasPreviusPage,
            },
            data: publicacoes,
        })

    } catch (error) {
        next(error)
    }
}