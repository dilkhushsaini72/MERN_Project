const express = require("express");
const router = require("./routes/api");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config({ silent: true });
// const PORT = 3000;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("MongoDB: connected"))
  .catch((err) => console.log(err));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
