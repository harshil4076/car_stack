
require("dotenv").config();
var express = require("express");
var app = express();
const cors = require('cors')
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const errorHandler = require("./handlers/error");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth")
// models
const db = require("./models")

//routes
const authRoutes = require("./routes/auth");
const adRoutes = require("./routes/ads")
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//using routes
app.use("/api/auth", authRoutes);
app.use("/api/user/:id/ads",loginRequired, ensureCorrectUser, adRoutes)
app.get("/api/ads", async function(req,res,next){
    try{
        let ads = await db.NewAd.find()
                        .sort({ createdAt: "desc" })
                        .populate("user", {
                            username: true,
                            email: true
                        });
        return res.status(200).json(ads)
    }catch(err){
        return next(err)
    }
})
app.use(function(req, res, next){
	let err = new Error("Not Found")
	err.status = 404;
	next(err);
})

app.use(errorHandler)

var port = process.env.PORT || 3001;
app.listen(port, process.env.IP, function(){
	console.log("CarStack has started on port " + port);
})
