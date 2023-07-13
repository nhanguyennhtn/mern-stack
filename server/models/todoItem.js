const mongoose = require('mongoose');
const TodoItemSchame = new mongoose.Schema({
    item:{ type: String}
})

module.exports = mongoose.model('todo', TodoItemSchame);