const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const NewAd = require("./newad");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    resetPasswordToken: {
       type: String
    },
    resetPasswordExpires: {
        type:Date
    },
    myGarage : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "NewAd"
        }
    ]
});

userSchema.pre("save", async function(next){
    try{
        if(!this.isModified('password')){
            let hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    }
    catch(err){
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword, next){
    try{
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        return next(err);
    }
}

const User = mongoose.model("User", userSchema)

module.exports = User;