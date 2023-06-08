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
    backgroundColor: {
        type: String,
    },
    heroBox: {
        type: {
            headerAlign: String,
            headerText: String,
            headerTextColor: String,
            headerFontStyle: String,
            backgroundImage: String,
            backGroundImageOpacity: String,
            bodyText: String,
            bodyTextColor: String,
            bodyTextAlign: String,
            bodyTextSize: String,
            bodySpaceTop: Number,
        }
    }

})

const EditStyle = mongoose.model('editStyle', editStyleVarSchema)

export default EditStyle

