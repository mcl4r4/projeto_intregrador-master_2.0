import express from 'express';
import cors from 'cors';
import { conn } from './config/sequelize.js';
import { errorHandler } from './middleware/errorHadler.js';

import path from "node:path";
import { fileURLToPath } from "node:url";


// ROTAS
import usuarioRoutes from './features/usuarios/usuarioRoutes.js';
import autenticacaoRoutes from './features/autenticacao/autenticacaoRoutes.js'
import publicacaoRoutes from './features/publicacoes/publicacaoRoutes.js'
import demandaRoutes  from "./features/demandas/demandaRoutes.js"

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

conn.sync()

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/public', express.static(path.join(__dirname, '../public')))

app.use("/api/usuarios", usuarioRoutes)
app.use("/api/autenticacao", autenticacaoRoutes)
app.use("/api/publicacoes", publicacaoRoutes)
// app.use("/api/usuario/demanda", demandaRoutes)

app.use((request, response) => {
    response.status(404).json({ messagem: "Rota não existe" })
})

app.use(errorHandler)

export default app;