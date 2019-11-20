
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport= require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
// models
var Cars = require("./models/cars");
var CarMake = require("./models/carmake");
var CarModel = require("./models/carmodel");

//routes
var adminRoutes = require("./routes/admin.js");
var landingRoutes = require("./routes/landing.js");
var stockRoutes = require("./routes/stock.js");

// Database
var url = process.env.DATABASEURL || "mongodb://localhost:27017/carstack_cars" 
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(bodyParser.json());

//using routes
app.use(adminRoutes);
app.use(landingRoutes);
app.use(stockRoutes);

// app.use(require("express-session")({
// 	secret:"Lets take a picture",
// 	resave: false,
// 	saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){
	console.log("CarStack has started on port " + port);
})
