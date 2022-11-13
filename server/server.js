const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();

app.set("port", 3000);

app.listen(app.get("port"), () => {
  console.log(`[OK] Server is running in localhost. Port: ${app.get("port")}`);
});

mongoose
  .connect("mongodb://localhost:27017/mevn", { useNewUrlParser: true })
  .then((db) => {
    console.log("[OK] DB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/records", require("./routes/record"));
app.use("/", express.static(path.join(__dirname, "../dist")));
