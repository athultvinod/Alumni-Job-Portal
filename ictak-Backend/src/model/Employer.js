const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');
mongoose.connect('mongodb+srv://userone:userone@myproject.fb69ouv.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true}, { useUnifiedTopology: true });

const Schema = mongoose.Schema;//To Access the schema from Mongoose package
//create schema for single book --->constructor fn
const LoginSchema = new Schema({
    firstname : String,
    lastname : String,
    user_email : {type: String,unique : true,dropDups: true},
    password : String,
    phone_number : String,
    companyname :  String,
    jobtitle : String,
    companytype: String,
    website :String,
    info :String,
    status:{type: String,default: "Unapproved",required: true},
    Role : {type: String,default: "Employer",required: true}
   
    

});//structure saved to db
//Model Creation----->Each Model is instance of Document
var Employerdata = mongoose.model('Employer',LoginSchema);//params (collection-name,Schema)
module.exports = Employerdata;
