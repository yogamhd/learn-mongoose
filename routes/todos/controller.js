const { Todos } = require("../../models");

module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Todos.find({}).populate("user");

            res.status(200).json({
                message: "Show data todos",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    addOne: async (req, res) => {
        try {
            const result = await Todos.create(req.body);

            res.status(200).json({ message: "Add new Todo", data: result });
        } catch (error) {
            console.log(error);
        }
    }
};


// const {Todos} = require("../../models")

// module.exports = {
//     getAll: async (req, res) => {
//         try {
//             const result = await Todos.find({})

//             res.status(200).json({message:"Shows Data Todos", data: result});
//         } catch (error) {
//             console.log(error);
            
//         }
//     }
// };