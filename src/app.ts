import express, { Response, Request } from "express";
import router from "./routes/Routes";
import dotenv from "dotenv";
// import swaggerJSDoc from "swagger-jsdoc";
// import swaggerUi from "swagger-ui-express";
// import swaggerSpec from "../api-docs/api_docs";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => console.log(`Terkoneksi pada port ${port}`));
