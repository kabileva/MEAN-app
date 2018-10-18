var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var userSchema = new Schema({
 _id: { type: objectId, auto: true },
 firstName: { type: String, required: true },
 lastName: { type: String, required: true },
 contactNo: { type: String, required: true },
 address: { type: String, required: true },
 registrationDate: { type: Date, default: Date.now },
}, {
 versionKey: false
});
 
var user = mongoose.model('users', userSchema);
 
module.exports = user;