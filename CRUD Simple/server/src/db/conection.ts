import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('rexito', 'root', 'Marito01', {
    host: 'localhost',
    dialect: "mysql",
    logging: false,
});

export default sequelize;