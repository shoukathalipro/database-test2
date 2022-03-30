const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/school";

mongoose.connect(mongoUrl, (err, succ) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected Successfully!");
    }
})



// Step1 : Create a Schema

const studentSchema = mongoose.Schema(
    {
        name : String,
        age : Number,
        email : String,
    }
)


// Step2 : Create a model / collection using this schema

const StudentModel = mongoose.model("students", studentSchema)


var student1 = new StudentModel(
    {
        name : "John Wick",
        age : 32,
        email : "johnwick@gmail.com"
    }
)

student1.save( (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})