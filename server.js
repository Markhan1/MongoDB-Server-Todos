require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/todos", require("./handleRequests/todos"));

const dbo = require("./db/conn");

app.route("/").get((req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  dbo.connectToServer((err) => {
    if (err) console.error(err);
  })
  console.log(`Server is running on port: ${port}`);
});
