import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0id: { type: String, required: true, unique: true },
    email:{ type: String, required: true, unique: true },
name:{ type: String },
address:{ type: String },
city:{ type: String },
country:{ type: String },
});

const User = mongoose.model("User", userSchema);

export default User;