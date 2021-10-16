require("dotenv").config();
const app = require('./app')
const mongoose = require('mongoose');

global.__basedir = __dirname;

mongoose.connect("mongodb+srv://mtrshuvo:oTKe6q9wK0qM5AdC@cluster0.ssew7.mongodb.net/ecommerce?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
}).then(()=> console.log("Connected to mongodb.."))
    .catch(err=> console.log("Mongodb Failed", err))
const port = process.env.PORT || 3001;

app.listen(port, ()=>{console.log(`App running on port ${port}`);})