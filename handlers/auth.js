const db = require("../models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");
require('dotenv').config();

exports.signin = async function(req, res, next){
    console.log(req.body)

    try{
    let user = await db.User.findOne({
        email: req.body.email   
    });

    if(!user){
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

exports.forgotpassword = async function(req, res, next){
    try{
        let user = await db.User.findOne({
            email: req.body.email
        })
        if(!user){
            console.log('In email')
            return next({
                    status: 400,
                    message: "Email Not found"
                })
        }else{
            const token = crypto.randomBytes('20').toString('hex');
            await user.update({
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 3600000,
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_GMAIL,
                    pass: process.env.PASSWORD
                }
            })
            const mailOption = {
                    from: 'harshil1789@gmail.com',
                    to: `${user.email}`,
                    subject: 'Reset Password Link',
                    text: `${process.env.RESET_LINK}/api/auth/reset/${token}`
            }

            await transporter.sendMail(mailOption, function(err, response){
                if(err){
                    return next({
                        message: err
                    })
                }else{
                    return res.status(200).json({response})
                }
            })
        }
    }catch(error){
        return next({
        status: 400,
        message: "Invalid Email/pass"
    })
    }
}

exports.reset = async function (req, res, next){
    try{
        const user = await db.user.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {
               $gt: Date.now()}
        });
        if(!user){
            return res.json('Password Link is not valid, Try again')
        }else {
            return res.status(200).json({
                user : user.username,
                message: "Password reset link is VALID"
            })
        }

    }catch(err){
        return next({
            status: 400,
            message: err.message
        }) 
    }
}
exports.updatepassword = async function (req, res, next){
    try {
        let user = await db.user.findOne({
            username: req.body.username
        });
        if(!user){
            return res.json('User not found')
        }else {
            await user.update({
                password: req.body.password,
                resetPasswordToken: undefined,
                resetPasswordExpires: undefined
            })
            return res.status(200).json({
                user : user.username,
                message: "Password Successfuly reset"
            })
        }
    }catch{

    }
}