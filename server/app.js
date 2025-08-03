const express = require("express");
const router = require("./routes/api");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config({ silent: true });
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB: connected"))
  .catch((err) => console.log(err));

app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
app.use("/uploads", express.static("uploads/"));

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
