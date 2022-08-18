import express from "express";
import bodyParser from "body-parser";

import Mail from "./mail.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send(`Requested from ${req.hostname} <h1>Hello World!</h1>`));

app.post("/mail", async (req, res) => {
  const { email, message } = req.body;
  return res.json({ result: await Mail.send(email, message) });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
