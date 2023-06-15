import Images from "../models/imagesModel";

import express, { Request, Response } from 'express';

export const getImages = async (req: Request, res: Response) => {
    try {
        const images = await Images.find({});
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}
export const getImage = async (req: Request, res: Response) => {
    try {
        const image = await Images.findById({});
        res.json(image);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

export const postImages = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const images = await Images.create({ name: req.body.name, image: req.body.image });
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
export const updateImageDescription = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const { id } = req.params; // Assuming you pass the image ID in the request URL params
        const { description } = req.body;

        const updatedImage = await Images.findByIdAndUpdate(
            id,
            { description }, // Update the description field
            { new: true } // Return the updated document
        );

        if (!updatedImage) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.json(updatedImage);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};