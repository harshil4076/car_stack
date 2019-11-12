var mongoose = require("mongoose");



var carmakeSchema = new mongoose.Schema({
    make: String
    
});

module.exports = mongoose.model("CarMake", carmakeSchema);