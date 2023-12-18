"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const imagesSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    image: {
        type: String,
        required: [true, 'Please add an image'],
    },
    description: {
        type: String,
    },
});
const Images = mongoose_1.default.model('images', imagesSchema);
exports.default = Images;
