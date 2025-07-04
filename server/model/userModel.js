const mongoose = require("mongoose")

const informationUser = new mongoose.Schema({
    email:{type:String},
    password:{type:String}
})

module.exports = mongoose.model("InformationAboutAuth",informationUser)