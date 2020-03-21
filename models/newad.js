const mongoose = require("mongoose");


const adSchema = new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    milage:{
        type: Number,
    },
    transmission:{
        type: String,
    },
    fueltype: {
        type: String,
    },
    doors:{
        type: Number,
    },
    engine: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
    },
    image: {
        type: Array
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
   {
       timestamps: true
   }
);

adSchema.pre('remove', async function(next){
    try{
        const User = require("./users")
        //find user
        let user = await User.findById(this.user);
        //remove the id from the user message list
        user.myGarage.remove(this.id);
        //save that user
        await user.save();
        return next();
    }catch(err){
        return next(err);
    }
})

const NewAd = mongoose.model("NewAd", adSchema)

module.exports = NewAd