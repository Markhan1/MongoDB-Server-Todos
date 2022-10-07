require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT;
const express = require("express");
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
