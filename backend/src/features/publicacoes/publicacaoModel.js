import { DataTypes } from 'sequelize'
import { conn } from '../../config/sequelize.js'
import { UsuarioModel } from '../usuarios/usuarioModel.js'

export const publicacaoModel = conn.define(
    "publicacoes",
    {
        conteudo: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        usuarioId: {
            type: DataTypes.UUID, 
            references: {
              model: UsuarioModel, 
              key: 'id'
            }
            
        },
    

    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
) 