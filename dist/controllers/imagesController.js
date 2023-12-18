"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImageDescription = exports.postImages = exports.getImage = exports.getImages = void 0;
const imagesModel_1 = __importDefault(require("../models/imagesModel"));
const getImages = async (req, res) => {
    try {
        const images = await imagesModel_1.default.find({});
        res.json(images);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.getImages = getImages;
const getImage = async (req, res) => {
    try {
        const image = await imagesModel_1.default.findById({});
        res.json(image);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.getImage = getImage;
const postImages = async (req, res) => {
    console.log(req.body);
    try {
        const images = await imagesModel_1.default.create({ name: req.body.name, image: req.body.image });
        res.json(images);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
};
exports.postImages = postImages;
const updateImageDescription = async (req, res) => {
    console.log(req.body);
    try {
        const { id } = req.params; // Assuming you pass the image ID in the request URL params
        const { description } = req.body;
        const updatedImage = await imagesModel_1.default.findByIdAndUpdate(id, { description }, // Update the description field
        { new: true } // Return the updated document
        );
        if (!updatedImage) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.json(updatedImage);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
exports.updateImageDescription = updateImageDescription;
