const UserModel = require("../models/UserModel");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const CheckEmail = async (req,res)=>{
  try{
    const {email} = req.body;
    const user = await UserModel.findOne({email: email},'-password -__v');

    if(!user)
        {
            return res.status(400).json({
                message : "User not exists...!!!",
                error : true,
                success : false,
            })
        }

    return res.status(201).json({
            message : "User Found !!!",
            user : user,
            success: true,
        })   
  }

  catch(err)
  {
     return res.status(500).json({
        message : err.message || err,
        error : true,
        success : false,
     })
  }
}



const CheckPassword = async (req,res)=>{
  try{
    const {password,userId} = req.body;
    const user = await UserModel.findById(userId);
    const verify_password = await bcryptjs.compare(password,user.password);
    
    if(!verify_password)
        {
            return res.status(400).json({
                message : "Please Check the password !!!",
                error: true,
                success : false,
            })    
        }

        const token_data ={
            id : user._id,
            email : user.email,
        }

    const token = await jwt.sign(token_data,process.env.JWT_SECRET_KEY,{expiresIn : '1d'});
    
    const cookieOptions = {
        http : true,
        secure : true,
    }

    return res.cookie('token',token,cookieOptions).status(200).json({
        message : "Login Successful !!!",
        token : token,
        success : true
    })    
}

  catch(err)
  {
    return res.status(500).json({
        message : err.message || err,
        error : true,
        success : false,
     })
  }

}

module.exports={
    CheckEmail,
    CheckPassword,
}