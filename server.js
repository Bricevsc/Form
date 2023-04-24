import dotenv from "dotenv";
import express from "express";
import router from "./routes/routes.js";
import route from "./routes/routes.js";
import ('./config/db.js')

dotenv.config({path:'config/.env'});

const { APP_HOSTNAME, APP_PORT, NODE_ENV} = process.env;

const app = express();
app.locals.pretty = NODE_ENV !== "production"; // Indente correctement le HTML envoyé au client (utile en dev, mais inutile en production)

app.use(router);
app.use("/", route);


app.listen(APP_PORT, () => {
    console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
  });
  