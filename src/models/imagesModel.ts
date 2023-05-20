import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();


const imagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    image: {
        type: String,
        required: [true, 'Please add an image'],
    },
})

const Images = mongoose.model('images', imagesSchema)

export default Images
