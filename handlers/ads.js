const db = require("../models");

exports.myGarage = async function(req, res, next){
    try{
        let allAds = await db.NewAd.find({
            user: req.params.id
        });
        return res.status(200).json(allAds)
    }
    catch (err){
        return next(err)
    }
    
}

exports.createNewAd = async function(req, res, next){
    try{
        let newad = await db.NewAd.create({
            category: req.body.category,
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            user: req.params.id,
            milage: req.body.milage,
            transmission: req.body.transmission,
            fueltype: req.body.fueltype,
            doors:req.body.doors,
            engine: req.body.engine,
            color:req.body.color,   
            price: req.body.price,
            image:req.body.image,
            description: req.body.description
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.myGarage.push(newad.id);
        await foundUser.save();
        let foundad = await db.NewAd.findById(newad._id).populate("user", {
            username: true,
            email: true
        });
        return res.status(200).json(foundad);
    }
    catch(err){
        return next(err)
    }
}

exports.getAd = async function (req, res, next){
    try{
        let foundad = await db.NewAd.findById(req.params.ad_id);
        return res.status(200).json(foundad)
    }
    catch(err){
        return next(err)
    }
}

exports.updateAd = async function(req, res, next){
    try{
        let updatedAd = await db.NewAd.findByIdAndUpdate(req.params.ad_id, {
            category: req.body.category,
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            milage: req.body.milage,
            transmission: req.body.transmission,
            fueltype: req.body.fueltype,
            doors:req.body.doors,
            engine: req.body.engine,
            color:req.body.color,   
            price: req.body.price,
            image: req.body.image,
            description: req.body.description

        });
        
        let foundad = await db.NewAd.findById(req.params.ad_id);
        return res.status(200).json(foundad)
    }
    catch(err){
        return next(err)
    }
}

exports.deleteAd = async function(req, res, next){
    try{
        let foundad = await db.NewAd.findById(req.params.ad_id);
        await foundad.remove();
        return res.status(200).json(foundad);
    }
    catch(err){
        return next(err);
    }
}