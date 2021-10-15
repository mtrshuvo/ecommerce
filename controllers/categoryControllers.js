const _ = require('lodash');
const {Category,validate} = require('../models/catagory');

const createCategory = async(req,res)=>{
let category = null;
const {error} = validate(_.pick(req.body,["name"]));
if(error) return res.status(400).send(error.details[0].message);
category = await Category.findOne(_.pick(req.body,["name"]));
if(category) return res.status(400).send("Alerady category exists");
category = new Category(_.pick(req.body,['name']));
const result = await category.save();
return res.status(201).send({
    message:"Category Created Successfully",
    data:{
        name:result.name
    }
})

}

const getCatagory = async(req,res)=>{
 const categories = await Category.find().select({_id:1,name:1}).sort({name:1});
 return res.status(200).send(categories);
}

module.exports = {createCategory:createCategory,getCatagory:getCatagory}