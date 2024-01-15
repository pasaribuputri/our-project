import express, { Response, Request } from "express";
import router from "./routes/Routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express with Typescript");
});

app.use("/api", router);

const port = process.env.PORT;
app.listen(port, () => console.log(`Terkoneksi pada port ${port}`));
