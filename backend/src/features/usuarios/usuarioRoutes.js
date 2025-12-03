import { cadastrarUsuario } from "./usuarioController.js";
import { Router } from "express";

const router = Router()

router.post("/", cadastrarUsuario)


export default router;