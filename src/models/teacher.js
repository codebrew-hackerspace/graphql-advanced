// const mongoose = require("mongoose");
// const uri = "mongodb://aria:malkani28@ds149593.mlab.com:49593/graphql-advanced"; //replace with your own mlab uri
// const db = mongoose.createConnection(uri);

// const schema = mongoose.Schema({ name: "string" });
// const Item = db.model("Item", schema);

// module.exports = Item;

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: { type: String }
});

export default mongoose.model('Teacher', TeacherSchema);