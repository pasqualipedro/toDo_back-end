//
// HERE WE ADD THE SCHEMA OF OUR DOCUMENT TO BE USED IN THE DB - "SKELETON ON THE OBEJECT"
//
const { Schema, model } = require(`moongoose`);

const toDoSchema = new Schema(
    {
        title: {type: String, required: true},
        status: {type: Boolean, default: false},
        dueDate: Date,
        assignee: String
    },
    {
        timestamps: true,
    }
);

module.exports = model('listToDo', toDoSchema);