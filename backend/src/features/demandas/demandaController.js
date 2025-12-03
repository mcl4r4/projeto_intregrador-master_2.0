import {demandaModel} from '../demandas/demandaModel.js'

export const cadastrarDemanda = async (request, response, next) => {
const {nome, descricao, dataInicial, dataLimite} = request.body;

try {
    if(!nome){
        const err = new Error("Campo nome obrigatório")
        err.statusCode = 400
        throw err;
    }
    if(!descricao){
        const err = new Error("Campo descrição obrigatório")
        err.statusCode = 400
        throw err;
    }
    if(!dataInicial){
        const err = new Error("Campo data inicial obrigatório")
        err.statusCode = 400
        throw err;
    }
    if(!dataLimite){
        const err = new Error("Campo data limite obrigatório")
        err.statusCode = 400
        throw err;
    }

    const demanda = await demandaModel.create({
        nome,
        descricao,
        dataInicial,
        dataLimite
    })

    response.status(201).json({
        messange: "Demanda cadastrada",
        success:true,
        demanda
    })
} catch (error) {
    next(error)
}
}