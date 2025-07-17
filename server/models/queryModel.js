const mongoose = require("mongoose");

const querySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    queryStatus: {
      type: String,
      required: true,
      default: "Unread",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
