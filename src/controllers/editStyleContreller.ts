import EditStyle from "../models/editStyleVar";



import express, { Request, Response } from 'express';



export const getEditStyle = async (req: Request, res: Response) => {
    try {
        const editStyle = await EditStyle.find({});
        res.json(editStyle);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

export const postEditStyle = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const editStyle = await EditStyle.create(req.body);
        res.json(editStyle);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

export const putEditStyle = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const editStyle = await EditStyle.updateOne(req.body);
        console.log(editStyle)
        if (editStyle.modifiedCount === 0) {
            res.status(404).json({ message: 'Not Found' });
        } else {
            const getStyle = await EditStyle.find({})
            res.json(getStyle);
        }



    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}