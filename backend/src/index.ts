import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { todos } from "./routes/todos";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

/**
 * Send greetings to API Client
 */
app.get('/', (_, res) => res.send({
  status: 'success',
  data: {},
  message: 'Welcome to our API'
}));

app.use("/todo", todos);

const port = process.env['PORT'];
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
