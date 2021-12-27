import mongoose from "mongoose";

const TransactionSchema = mongoose.Schema(
{
    type: String,
    category: String,
    amount: Number,
    date: Date,
})


const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction