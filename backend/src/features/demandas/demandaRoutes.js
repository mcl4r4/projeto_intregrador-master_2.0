import { cadastrarDemanda } from "./demandaController.js";
import { upload } from "../../middleware/upload.js";
import {Router} from  'express'

const router = Router()

router.post("/",upload.single("upload"), cadastrarDemanda)

export default router;