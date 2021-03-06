/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoModel = new Schema({
    todo: {
        type: String
    },
    priority: {
        type: String
    },
    tags: {
        type: [String]
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Todo = mongoose.model('Todo', todoModel);
module.exports = Todo;
