const mongoose = require("mongoose");

// const cartItemSchema = new mongoose.Schema(
//   {
//     productId: {
//       type: Array,
//       ref: "Product",
//     },
//     quantity: { type: Number, default: 1 },
//     // ...other fields if needed
//   },
//   { _id: false } // Only if you do NOT want an _id for each cart item
// );

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user", // Default role is user, can be changed to admin
    },
    cartItems: {
      type: Array,
      default: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          quantity: { type: Number, default: 1 },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
