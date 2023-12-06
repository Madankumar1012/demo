const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const multer =require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {

      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        console.log(file);
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })
let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());




let connectToMDB = async()=>{
     try{
        await mongoose.connect("mongodb+srv://vinaykumar:mahi1234@cluster0.utceafc.mongodb.net/userDB?retryWrites=true&w=majority")

     console.log("connected succesfully");
     }catch(err){
        console.log("something went wrong");
     }

}



let userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    profilepic:String,
});

let User = new mongoose.model("User",userSchema);


app.post("/signup",upload.array("profilepic"),async(req,res)=>{
    console.log("we have received the request from client");
    console.log(req.body);
    try{
        let newUser = new User ({
            firstName:req.body.fn,
            lastName:req.body.ln,
            email:req.body.email,
            password:req.body.password,
            profilepic:req.body.profilepic,
            
        });
        
    await User.insertMany([newUser]);
    
    res.json({status:"success",msg:"user created succssfully"});

    }catch(err){
        res.json({status:"failure",msg:"err"})
    }

});

app.listen(1111,()=>{
    console.log("listening to port 1111")
});
connectToMDB();

