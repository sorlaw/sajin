import { Sequelize } from "sequelize";

const db = new Sequelize("new_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
