import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { apiDocumentation } from "./docs/apidoc";
import { deviceRoute } from "./routes/device.route";

const HOST = process.env.HOST || "http://localhost";
const PORT = parseInt(process.env.PORT || "3001");

const app = express();
app.use(express.json());

app.use(cors());
app.use(deviceRoute());
app.use("/", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.listen(PORT, () => {
  console.log(`The application started on URL ${HOST}:${PORT}`);
});
