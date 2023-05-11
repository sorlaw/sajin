import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Siswa = db.define(
  "siswa",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama: DataTypes.STRING,
    tahun: DataTypes.STRING,
    instagram: DataTypes.STRING,
    quotes: DataTypes.TEXT,
    gambar: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Siswa;

(async () => {
  await db.sync();
})();
