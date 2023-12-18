"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const editStyleVarSchema = new mongoose_1.default.Schema({
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
    },
    MiddleContentBox: {
        type: {
            headerAlign: String,
            headerText: String,
            headerTextColor: String,
            headerFontStyle: String,
            backgroundImage1: String,
            backgroundImage2: String,
            backGroundImageOpacity: String,
            bodyText: String,
            bodyTextColor: String,
            bodyTextAlign: String,
            bodyTextSize: String,
            bodySpaceTop: Number,
        }
    }
});
const EditStyle = mongoose_1.default.model('editStyle', editStyleVarSchema);
exports.default = EditStyle;
