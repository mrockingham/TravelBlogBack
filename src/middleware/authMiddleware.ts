import jwt, { JwtPayload } from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import express, { Request, Response, } from "express"

import User from "../models/userModel"

export const protect = asyncHandler(async (req: any, res: any, next: any) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.USER_VERIFICATION_TOKEN_SECRET || '') as JwtPayload

            req.user = await User.findById(decoded.id).select("-password")

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error("Not authorized, token failed")
        }
    }

    if (!token) {
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})
