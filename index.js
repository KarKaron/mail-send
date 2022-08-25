import express from "express";
import bodyParser from "body-parser";

import Mail from "./mail.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.post("/mail", async (req, res) => {
  const { email, subject, message } = req.body;
  return res.json({ result: await Mail.send(email, subject, message) });
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
