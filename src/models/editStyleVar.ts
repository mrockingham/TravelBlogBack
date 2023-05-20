import mongoose from 'mongoose';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

const editStyleVarSchema = new mongoose.Schema({
    topBarNavAlign: {
        type: String,

    },
    topBarNavLinks: {
        type: [String],

    },
    heroBox: {
        type: {
            headerAlign: String,
            headerText: String,
            backgroundImage: String,
        }
    }

})

const EditStyle = mongoose.model('editStyle', editStyleVarSchema)

export default EditStyle

