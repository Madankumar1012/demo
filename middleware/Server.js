const express =  require("express");
const cors = require("cors");

const app = express();
app.use(cors());


app.get("/movies",(req,res)=>{


res.json(["salaar","kalki2898","dunki"])
    
})

app.listen(3333,()=>{
    console.log("listening to port 3333")
})