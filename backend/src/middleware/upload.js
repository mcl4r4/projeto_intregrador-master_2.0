import multer from "multer";
import { Storage } from "../config/multer.js";


export const upload = multer({
    storage:Storage,
    fileFilter:(request, file, cb) => {
          if(!file.originalname.match(/\.(pdf)$/i)){
            return cb(new Error('Por favor, envie apenas pdf'))
        }
        cb(null, true)
    }
})