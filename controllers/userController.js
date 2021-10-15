const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User,validatUser} = require('../models/user')

module.exports.singUp = async(req,res)=>{
    const {error} = validatUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = {};
    user = await User.findOne({email:req.body.email});
    if(user) return res.status(400).send("Email already registered");
    user = new User(_.pick(req.body,['name','email','password']))
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password,salt);
    const token = user.generateJWT();

    const result = await user.save();
        return res.status(201).send({
            message:"Registration Succesfull",
            token:token,
            user:_.pick(result,['id','name','email'])
        })
}

module.exports.singIn = async(req,res)=>{
    let user = await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send("Invalid Email of Password");

    const validUser = await bcrypt.compare(req.body.password, user.password);
    if(!validUser) return res.status(400).send("Invalid Email of Password");

    const token = user.generateJWT();

    return res.status(200).send({
        message:"Login Succesfull",
        token:token,
        user:_.pick(user,['id','name','email'])
    })
}