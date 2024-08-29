import { DataTypes } from "sequelize";
import sequelize from "../helpers/connectionDB.js";

const Distributor = sequelize.define(
  "Distributor",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refer_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "distributor",
  }
);

// sequelize.sync({ alter: true })
//     .then(() => console.log('distributorModel synced'))
//     .catch((err) => console.log(`Error syncing distributorModel ${err.message} `))

export default Distributor;
