const express=require('express')
const appp=express();
const mongoose=require('mongoose')
const cors=require('cors')
appp.use(cors());
const User=require('./models/user')
const port=3000;
appp.listen(port, ()=>{
    console.log("App is listening at", port)
})

const urldb='mongodb+srv://hana:hana2008@cluster0.zrrx1ru.mongodb.net/?retryWrites=true&w=majority'

appp.use('/', express.static(path.join(__dirname,'static')))
appp.use(bodyParser.json())

appp.post('api/register', async(req, res) =>{
    console.log(req.body)
    res.json({status:'ok'})
})

mongoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) });


/*const UserInfo= new mongoose.Schema({
    name:{type:String, required:True},
    username:{type:String, required:True},
    email:{type:String, required:True},
    password:{type:String, required:True}})*/


import App from "./app";

const root = document.getElementById("app");
const app = new App(root);

/*function greet(){
    var name=document.getElementById("namee");
    document.getElementById("signupp").addEventListener("click", ()=>{
        document.getElementById("greeting").innerHTML="Welcome", name;
    });
      
    }*/



