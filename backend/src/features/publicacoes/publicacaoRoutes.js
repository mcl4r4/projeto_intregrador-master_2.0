import { criarPublicacao, listarPublicacoes } from "./publicacaoController.js";
import {Router} from "express"

const router = Router()

router.post("/", criarPublicacao)
router.get("/", listarPublicacoes)

export default router;