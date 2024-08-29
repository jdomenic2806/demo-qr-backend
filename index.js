import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import sequelize from "./src/helpers/connectionDB.js"

import referencedRouter from "./src/routes/referenced.route.js";

const app = express();
const port = process.env.PORT || 3010;

app.listen(port, () => console.log(`Server is running on port: ${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api/v1/referenciados", referencedRouter);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully "))
  .catch((err) => console.log(`Unable to connect to the database: ${err}`));
