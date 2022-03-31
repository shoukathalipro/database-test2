const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/school";

// Create a connection with the database
// The connection url should contain the db name inside it.

mongoose.connect(mongoUrl, (err, succ) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected Successfully!");
    }
})



// Step1 : Create a Schema
// Schema is a predefined structure that we want all of our
// documents should follow when they are being inserted.

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

var student2 = new StudentModel(
    {
        name : "Tony Stark",
        age : 32,
        email : "tonystark@gmail.com"
    }
)

var student3 = new StudentModel(
    {
        name : "Steve",
        age : 32,
        email : "steve@gmail.com"
    }
)

var tempArr = [student2, student3];


// .save is only available in mongoose
// we don't have insertOne function when we're using a model

student1.save( (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})


StudentModel.insertMany(tempArr, (err, succ) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Multiple Docs were inserted");
    }
})