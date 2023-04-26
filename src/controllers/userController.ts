import User from "../models/userModel";
import dotenv from 'dotenv';

import bcrypt from "bcryptjs"
import express, { Request, Response } from 'express';
import generateToken from "../utils/generateToken";



// Test Get User
export const getUserProfile = async (req: Request, res: Response) => {
    console.log(req.body)
    const id = req.body
    const user = await User.find({})
    console.log(user)
    if (user) {
        res.status(200).json(user)

    } else {
        res.status(401)
        throw new Error('User not found')
    }

}




// Register 
export const registerUser = async (req: Request, res: Response) => {

    // console.log(req.body)

    try {
        // Check if the email is in use
        const { name, email, password } = req.body
        const userExists = await User.findOne({ email })

        console.log('user exist', userExists)
        if (!name || !email || !password) {
            res.status(404)
                .send({ error: 'Please fill in all fields' });
        }
        else if (userExists) {
            res.status(404)
                .send({ error: 'Email already exists' });
            // throw new Error('User already exists')
        } else {


            // Step 1 - Create and save the user
            const user = await User.create({
                name,
                email,
                password
            })


            // Step 2 - Generate a verification token with the user's ID
            // const verificationToken = user.schema.methods.generateVerificationToken;
            // Step 3 - Email the user a unique verification link

            // const url = `https://pure-citadel-43089.herokuapp.com/app/users/verify/${verificationToken}`
            // const msg = {
            //   to: email,
            //   from: 'osopenworld@gmail.com', // Change to your verified sender
            //   subject: 'Devernote Account Verification',
            //   html: `Click <a href = '${url}'>here</a> to confirm your email.`,
            // }
            // sgMail
            //   .send(msg)
            //   .then(() => {
            //     console.log('Email sent')
            //   })
            // // transporter.sendMail({
            // //   to: email,
            // //   subject: 'Verify Account',
            // //   html: `Click <a href = '${url}'>here</a> to confirm your email.`
            // // })
            // return res.status(201).send({
            //   message: `Sent a verification email to ${email}`
            // });
            if (user) {
                res.status(201).json({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    token: generateToken(user._id)

                })
            }

        }
    } catch (err) {
        return res.status(500).send(err);
    }
}
// Login
export const loginUser = async (req: Request, res: Response) => {
    console.log(req.body)
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
            .send({ error: 'Invalid email or password' });
        // throw new Error('Invalid email or password')
    }

}
// Get current User Profile
export const getCurrentUserProfile = async (req: any, res: Response) => {
    console.log(req.body)
    const { _id, name, email } = await User.findById(req.user.id) as any

    res.status(200).json({
        _id,
        name,
        email,
    })

}