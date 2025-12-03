import { DataTypes } from "sequelize";
import { conn } from "../../config/sequelize.js";

export const demandaModel = conn.define(
    "demandas",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dataInicial: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dataLimite: {
            type: DataTypes.DATE,
            allowNull: false
        },
        demandaDoc: {
            type: DataTypes.STRING,
            defaultValue: "upload"
        }
    },
    {
        createdAt: "created_at",
        updatedAt: "update_at"
    }
)
