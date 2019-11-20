var express = require("express");
var router = express.Router();
var Cars = require("../models/cars");
var CarMake = require("../models/carmake");
var CarModel = require("../models/carmodel");


router.get("/admin", function(req, res){
    Cars.find({}, function(err,foundcar){
        if(err){
            console.log(err);
        }else{
            CarMake.find({}, function(err,foundcarmake){
                if(err){
                    console.log(err);
                }else{
                   
                    CarModel.find({}, function(err,foundcarmodel){
                        if(err){
                            console.log(err);
                        }else{
                            res.render("admin.ejs" ,{carmodel:foundcarmodel, cars:foundcar,carmake:foundcarmake});
                
                        }
                    });
                }
            });
        }
    });
    
    
});
// delete route
router.delete("/admin/:id", function(req,res){
    Cars.findByIdAndDelete(req.params.id, function(err){
        console.log(err);

    });
    res.redirect("/admin");
});
//edit route
router.get("/admin/:id/edit", (req, res)=>{
    Cars.findById(req.params.id, (err,foundcar)=>{
        if(err){
            console.log(err);
        }else{
            res.render("editcar.ejs" , {car:foundcar});
        }
    });
});
router.put("/admin/:id", (req,res)=>{
    Cars.findByIdAndUpdate(req.params.id , req.body.car , (err, updatedcars)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/admin");
        }
    })
});

// ajax add car make
router.post("/addcarmake", function(req,res){
    var new_make = {
        make:req.body.form_data[0].value
    }
    console.log(new_make);
    CarMake.create(new_make, function(err, newmake){
        if(err){
            console.log(err);
        }
        else{

            console.log(newmake)
            res.send(newmake)
        }
    });
});
//add car model route
router.post("/addcarmodel", function(req, res){
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
    res.redirect("/admin");

});
// display make by model admin page ajax
router.get("/displaymodel", function(req, res){
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

module.exports = router;