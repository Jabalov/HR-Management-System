const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/Emp");
const connection = mongoose.connection;

mongoose.connect("mongodb://localhost:27017/employees", {
  useNewUrlParser: true
});
connection.once("open", function() {
  console.log("MongoDB database connection Successful.");
});

app.use(cors());
app.use(bodyParser.json());
app.use("/Employees", router);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
