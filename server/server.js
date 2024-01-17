require("dotenv").config();
const  dbConnect = require("./config/dbConnect");
const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 8080;

dbConnect();


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
