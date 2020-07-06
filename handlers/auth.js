const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req, res, next){
    console.log(req.body)

    try{
        console.log('into try')
    let user = await db.User.findOne({
        email: req.body.email   
    });
    console.log('after find user')

    if(!user){
        console.log('In email')
        return next({
                status: 400,
                message: "Email Not found"
            })
    }
    let { id, username, email, myGarage } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch){
        let token = jwt.sign(
            {
                id,
                username,
                email,
            },
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            email,
            myGarage,
            token
        });
    }else {
        // const err = new Error('Invalid Email')
        //     err.status = 400
        //     return next(err)
        return next({
            status: 400,
            message: "Invalid password"
        })
        // let err =  new Error('Invalid email/ password')
        // return next(err);
    }
    }catch(error){
            return next({
            status: 400,
            message: "Invalid Email/pass"
        })
        // const err = new Error('Invalid Email')
        //     err.status = 400
        //     return next(err)
        // return next(error)
    }
};

exports.signup = async function(req, res, next){
    console.log(req.body)
    try{
        let user = await db.User.create(req.body);
        let { id, username, email } = user;
        let token = jwt.sign({
            id,
            username,
            email,
        }, process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            email,
            token
        });
    }
    catch(err){
        if ( err.code === 11000 ){
            err.message = "Sorry, that username and/or email is taken"
        }
        return next({
            status: 400,
            message: err.message
        })
    }
}