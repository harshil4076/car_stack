require("dotenv").config();
const jwt = require("jsonwebtoken");

//make sure that user is logged 
exports.loginRequired = function(req, res, next){
  try{
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
        if (decoded){
            return next();
        } else{
            return next({
                status: 401,
                message: "Please log in first"
            })
        }
    });
  } catch(err){
    return next({
        status: 401,
        message: "Please log in first"
    })
  } 
};

// make sure we get the correct user - Authorization
exports.ensureCorrectUser = function(req, res, next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if (decoded && decoded.id === req.params.id){
                return next();
            }
            else{
                return next({
                    status: 401,
                    message: "unauthorised"
                })
            }
        })
    }catch(e){
        return next({
            status: 401,
            message: "unauthorised"
        });
    }
};