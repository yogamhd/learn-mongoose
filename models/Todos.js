const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
});

const Todos = mongoose.model("todos", todoSchema);

module.exports = Todos;








// const mongoose = require("mongoose")
// const Schema = mongoose.Schema

// const todoSchema = new Schema({
//     todo: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     }    
// })

// const Todos = mongoose.model("todos", todoSchema);

// module.exports = Todos;