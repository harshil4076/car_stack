var express = require("express");
var router = express.Router();
var CarMake = require("../models/carmake");
var Cars = require("../models/cars");

router.get("/", function(req,res){
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
router.get("/viewcar/:id", function(req, res){
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

router.get("/updatebyone", function(req, res){

    var make = req.query.make
    Cars.find({make:make}, function(err,foundcar){
        if(err){
            console.log(err);
        }else{
            res.jsonp(foundcar);
          
        }
    });
})

module.exports = router;