const mongoose = require("mongoose")

// [Lender, Borrower, Code, Amount, Reason, Days]
const GarbageSchema = new mongoose.Schema({
  lender: {
    type: String,
    required: true,
  },
  borrower: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
})

const Garbage = mongoose.model("Garbage", GarbageSchema)
module.exports = Garbage
