"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putEditStyle = exports.postEditStyle = exports.getEditStyle = void 0;
const editStyleVar_1 = __importDefault(require("../models/editStyleVar"));
const getEditStyle = async (req, res) => {
    try {
        const editStyle = await editStyleVar_1.default.find({});
        res.json(editStyle);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.getEditStyle = getEditStyle;
const postEditStyle = async (req, res) => {
    console.log(req.body);
    try {
        const editStyle = await editStyleVar_1.default.create(req.body);
        res.json(editStyle);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.postEditStyle = postEditStyle;
const putEditStyle = async (req, res) => {
    console.log(req.body);
    try {
        const editStyle = await editStyleVar_1.default.updateOne(req.body);
        console.log(editStyle);
        if (editStyle.modifiedCount === 0) {
            res.status(404).json({ message: 'Not Found' });
        }
        else {
            const getStyle = await editStyleVar_1.default.find({});
            res.json(getStyle);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.putEditStyle = putEditStyle;
