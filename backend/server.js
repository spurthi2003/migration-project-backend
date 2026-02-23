const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/migrationDB")
  .then(() => console.log("Mongo connected"));

app.get("/", (req, res) => {
  res.send("backend works");
});

app.use("/tasks", require("./routes/taskRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));