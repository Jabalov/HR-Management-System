const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const post = require("./routes/post");
const auth = require("./routes/auth");
const users = require("./routes/users");
const task = require("./routes/task");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}
const app = express();
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.use("/posts", post);
app.use("/auth", auth);
app.use("/users", users);
app.use("/task", task);

const mongodb_conn_module = require("./mongodbConnModule");

const db = mongodb_conn_module.connect();

app.listen(process.env.PORT || 8081);
