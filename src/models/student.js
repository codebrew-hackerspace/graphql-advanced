// const mongoose = require("mongoose");
// const uri = "mongodb://aria:malkani28@ds149593.mlab.com:49593/graphql-advanced"; //replace with your own mlab uri
// const db = mongoose.createConnection(uri);

// const schema = mongoose.Schema({ name: "string",  });
// const Student = db.model("Student", schema);

// module.exports = Student;


import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: { type: String },
    teacherId: {type: String}
});
export default mongoose.model('Student', StudentSchema);
