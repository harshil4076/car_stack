var express = require("express");
var router = express.Router();
var CarMake = require("../models/carmake");
var Cars = require("../models/cars");

// router.get("/addcar", function(req,res){
//     CarMake.find({},function(err, foundcarmake){
//         if(err){
//             console.log(err);
//         }else{
//             res.render("addcar.ejs", {carmake:foundcarmake});
//         }
//     });
    
// });

router.post("/addcar", function(req, res){
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
// display model by make ajax on add car page

router.get("/addcar/displaymodel", function(req, res){
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
module.exports = router;