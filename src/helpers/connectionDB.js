import { Sequelize } from "sequelize";

const configs = {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
  logging: false,
};

const sequelize = new Sequelize("axios-store", "postgres", "root", configs);

export default sequelize;
