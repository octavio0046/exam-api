import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

//ROUTES
import indexRoutes from "./routes/index.routes";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middelewares();
    this.routes();
    this.cors();
  }

  cors() {
    const allowedOrigins = ["http://localhost:4200"];
    this.app.use(cors);

    const options: cors.CorsOptions = {
      origin: allowedOrigins,
    };

    this.app.use(cors(options));
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middelewares() {
    this.app.use(morgan("dev"));

    //solo permitir json
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", indexRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
  }
}