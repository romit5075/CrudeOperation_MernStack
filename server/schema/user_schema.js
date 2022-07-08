import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
})

//auto increment 
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');


//Table == Collection in Database,Mongo DB Language
const user= mongoose.model('user',userSchema);

export default user;