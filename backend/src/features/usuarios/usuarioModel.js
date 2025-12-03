import { DataTypes } from "sequelize";
import { conn } from "../../config/sequelize.js";

export const UsuarioModel = conn.define(
    "usuarios",
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type:DataTypes.ENUM,
            values:['freelancer', 'comum'],
            allowNull:false,
            defaultValue: "comum"
        }
        
    },
    {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
)