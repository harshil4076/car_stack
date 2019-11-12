var mongoose = require("mongoose");

var carmodelSchema = new mongoose.Schema({
    model: String,
    id:{
        type: mongoose.Schema.Types.ObjectId,
			ref:"CarMake"
    }
    
    
});

module.exports = mongoose.model("CarModel", carmodelSchema);