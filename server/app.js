const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const post = require("./routes/post");

const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.use("/posts", post);

const mongodb_conn_module = require("./mongodbConnModule");
const db = mongodb_conn_module.connect();

app.listen(process.env.PORT || 8081);
