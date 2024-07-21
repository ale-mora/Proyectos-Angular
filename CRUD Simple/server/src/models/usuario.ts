import { DataTypes } from "sequelize";
import db from "../db/conection";

const Usuario = db.define('dato', {
    rut: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    cumple: {
        type: DataTypes.DATE
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Usuario;