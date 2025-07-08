const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    icon: {type: String},
    category: {type: String, required: true}, // Example: Food, Rent, etc.
    amount: {type: Number, required: true},
    date: {type: Date, default: Date.now}, // Date of expense
}, {timestamps: true});

module.exports = mongoose.model('Expense', expenseSchema);