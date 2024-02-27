import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true,"Must provide a username. "],
        unique: [true,"Must be unique. "],
    },
    email: {
        type: String,
        required: [true,"Must provide an email. "],
        unique: [true, "Must be unique. "],
    },
    password: {
        type: String,
        required: [true,"Must provide a password. "],
    },
},
{
    timestamps: true
});

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User;