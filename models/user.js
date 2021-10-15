const {Schema, model} = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const userSchema = Schema({
    name:{
        type:String,
        required:true,
        maxlength:100,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        maxlength:1024,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps: true});

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id:this._id,
        email:this.email,
        role:this.role,
        name:this.name,
    },process.env.JWT_SECRET_KEY, {expiresIn: '7d' })
    
    return token;
}

const validatUser = user =>{
    const schema = Joi.object({
        name:Joi.string().min(5).max(100).required(),
        email:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(5).max(255).required(),
    })
    return schema.validate(user);
}

module.exports.User = model("User",userSchema);
module.exports.validatUser = validatUser;
