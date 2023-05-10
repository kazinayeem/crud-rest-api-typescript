import express, {
  Application,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
} from "express";
import morgan from "morgan";
import cors from "cors";
import { db } from "./config/db";
import { defaultRoute } from "./routes/routes";
const app: Application = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello welcome to my website ts</h1>");
});
app.post("/post", async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  return res.status(200).send({
    message: "Hello World from post!",
  });
});
app.use("/todo/", defaultRoute);

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const message = err.message ? err.message : "this error is from server.ts";
    const status = err.status ? err.status : 500;
    res.status(status).json({
      message: message,
    });
  }
);

app.listen(3002, () => {
  db();
  console.log("server is running port 3002");
});
