const mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");

let app = express();
app.use(cors());

app.get("/getContriesList", async (req, res) => {
  let CountriesList = await employee.find().distinct("country");

  res.json(CountriesList);
});

app.get("/getgenderList", async (req, res) => {
  let genderList = await employee.find().distinct("gender");

  res.json(genderList);
});

app.get("/getemployes", async (req, res) => {
  console.log(req.query);
   let employesdata = await employee
     .find()
    .and([{ country: req.query.country },
       { gender: req.query.gender }]);

   res.json(employesdata);
 });

app.listen(1234, () => {
  console.log("listening to port 1234");
});

let connectTOMDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vinaykumar:Vinay1234@cluster0.utceafc.mongodb.net/dummydata?retryWrites=true&w=majority"
    );
    getdatafromDB();
    console.log("connect successfully to mdb");
  } catch (error) {
    console.log("unable to connect to mdb");
  }
};

let employesschema = new mongoose.Schema({
  id: Number,

  firstName: String,
  lastName: String,
  email: String,
  gender: String,
  country: String,
  age: Number,
  profilepic: String,
});

let employee = new mongoose.model("employee", employesschema, "employes");

connectTOMDB();

let getdatafromDB = async () => {
  let employesdata = await employee.find();

  console.log(employesdata);
};
