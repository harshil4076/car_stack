
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport= require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var Cars = require("./models/cars");
var CarMake = require("./models/carmake");
var CarModel = require("./models/carmodel");

var url = process.env.DATABASEURL || "mongodb://localhost:27017/carstack_cars" 
mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(bodyParser.json());


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


app.get("/", function(req,res){
    Cars.find({}, function(err,foundcar){
        if(err){
            console.log(err);
        }else{
            CarMake.find({}, function(err, foundmake){
                if(err){
                    console.log(err);
                }else{
                    res.render("landing.ejs" ,{cars:foundcar, carmake:foundmake});

                }
            } )

        }
    }); 
});
app.get("/viewcar/:id", function(req, res){
    console.log(req.params.id);
    Cars.findById(req.params.id, function(err, foundcar){
        if (err){
            console.log(err);
        }else{
            console.log(foundcar);
            res.render("displaycarbyid.ejs", {car:foundcar});
        }
    });
});

app.get("/updatebyone", function(req, res){

    var make = req.query.make
    Cars.find({make:make}, function(err,foundcar){
        if(err){
            console.log(err);
        }else{
            res.jsonp(foundcar);
          
        }
    });
})

app.get("/admin", function(req, res){
    Cars.find({}, function(err,foundcar){
        if(err){
            console.log(err);
        }else{
            res.render("admin.ejs" ,{cars:foundcar});

        }
    });
});
app.get("/addcarmake", function(req,res){
    CarMake.find({}, function(err,foundcarmake){
        if(err){
            console.log(err);
        }else{
            console.log(foundcarmake)
            CarModel.find({}, function(err, foundcarmodel){
                if(err){
                    console.log(err);
                }else{
                    res.render("addcarmake.ejs",{carmake:foundcarmake, carmodel:foundcarmodel});
                    
                }
            });
        }
    });
});
app.post("/addcarmake", function(req,res){
    var make= req.body.make;
    var newmake = {make:make};
    CarMake.create(newmake, function(err, newmake){
        if(err){
            console.log(err);
        }
        else{

            console.log(newmake)
            res.redirect("/addcarmake")
        }
    });
});
app.post("/addcarmodel", function(req, res){
    console.log(req.body.carmake)
    var carmake = req.body.carmake
    CarMake.findOne({make:carmake}, function(err, foundcarmake){
        if(err){
            console.log(err);
        }else{
            var carmodel= req.body.model
            var newmodel = {model:carmodel,id:foundcarmake._id}
            console.log(foundcarmake._id)
            CarModel.create(newmodel, function(err, createdmodel){
                if(err){
                    console.log(err);
                }else{
                    
                    createdmodel.save();
                    console.log(createdmodel);
                    
                }
            });
        }
        
    });
    res.redirect("/addcarmake");

});

app.get("/displaymodel", function(req, res){
    var make=req.query.make
     CarMake.findOne({make:make}, function(err, foundmake){
        if(err){
        console.log(err)
        }else{
            var id= foundmake._id
    
            CarModel.find({id:id} , function(err, foundmodels){
                if(err){
                    console.log(err)
                }else{ 
                    console.log(foundmodels)
                    res.status(200);
                    res.render("ajaxcallmodels.ejs", {carmodel:foundmodels});
                    res.end();
                }
        
            });
        }

    });
     
});
app.get("/addcar", function(req,res){
    CarMake.find({},function(err, foundcarmake){
        if(err){
            console.log(err);
        }else{
            res.render("addcar.ejs", {carmake:foundcarmake});
        }
    });
    
});
app.get("/addcar/displaymodel", function(req, res){
    var make=req.query.make
     CarMake.findOne({make:make}, function(err, foundmake){
        if(err){
        console.log(err)
        }else{
            var id= foundmake._id
    
            CarModel.find({id:id} , function(err, foundmodels){
                if(err){
                    console.log(err)
                }else{ 
                    console.log(foundmodels)
                    // res.status(200);
                    res.send(foundmodels);
                }
        
            });
        }

    });
     
});

app.post("/addcar", function(req, res){
    var category = req.body.category;
        make = req.body.make;
        model= req.body.model;
        year= req.body.year;
        milage= req.body.milage;
        transmission= req.body.transmission;
        fueltype= req.body.fueltype;
        price= req.body.price;
        doors= req.body.doors;
        engine= req.body.engine;
        color= req.body.color;
        image1= req.body.image1;
        image2= req.body.image2;
        image3= req.body.image3;
        image4= req.body.image4;
        image5= req.body.image5;
        image6= req.body.image6;
        image7= req.body.image7;
        image8= req.body.image8;
        image9= req.body.image9;
        image10= req.body.image10 ;
        
        var newCar= {
        category :category,
        make :make,
        model:model,
        year:year,
        milage:milage,
        transmission:transmission,
        fueltype:fueltype,
        price:price,
        doors:doors,
        engine:engine,
        color:color,
        image1:image1, 
        image2:image2,
        image3:image3,
        image4:image4,
        image5:image5,
        image6:image6,
        image7:image7,
        image8:image8,
        image9:image9,
        image10:image10
        }
        Cars.create(newCar, function(err, newlycreated){
            if(err){
                console.log(err);
            }else{
                console.log(newlycreated);
                res.redirect("/admin");
            }
        });
});

app.delete("/admin/:id", function(req,res){
    Cars.findByIdAndDelete(req.params.id, function(err){
        console.log(err);

    });
    res.redirect("/admin");
});
//edit route
app.get("/admin/:id/edit", (req, res)=>{
    Cars.findById(req.params.id, (err,foundcar)=>{
        if(err){
            console.log(err);
        }else{
            res.render("editcar.ejs" , {car:foundcar});
        }
    });
});
app.put("/admin/:id", (req,res)=>{
    Cars.findByIdAndUpdate(req.params.id , req.body.car , (err, updatedcars)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/admin");
        }
    })
});

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){

	console.log("CarStack has started on port " + port);
})
