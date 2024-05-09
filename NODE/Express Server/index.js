import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
  });
  
  app.post("/register", (req, res) => {
    res.sendStatus(201);
  });
  
  app.put("/user/angela", (req, res) => {
    res.sendStatus(200);
  });
  
  app.patch("/user/angela", (req, res) => {
    res.sendStatus(200);
  });
  
  app.delete("/user/angela", (req, res) => {
    res.sendStatus(200);
  });
  
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });