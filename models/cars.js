var mongoose = require("mongoose");

var carsSchema = new mongoose.Schema({
    category: String,
    make: String,
    model: String,
    year: Number,
    milage: Number,
    transmission: String,
    fueltype: String,
    doors: Number,
    engine: String,
    color: String,
    price: Number,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
    image7: String,
    image8: String,
    image9: String,
    image10: String

});

module.exports = mongoose.model("Cars", carsSchema);