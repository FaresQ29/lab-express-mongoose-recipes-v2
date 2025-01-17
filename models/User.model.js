const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const Model = mongoose.model;
//create a schema
const usersSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true},
    password: { type: String, required: true},
    email: String,
})

//create a model
const Users = Model("User", usersSchema)

module.exports = Users