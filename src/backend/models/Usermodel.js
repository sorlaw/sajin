import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default User;

(async () => {
  await db.sync();
})();
