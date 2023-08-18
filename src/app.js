import express from "express";
import "./db/conn.js";
import router from "./routes/men.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.listen(PORT);
app.use(router);
