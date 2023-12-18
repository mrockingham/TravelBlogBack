"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUserProfile = exports.loginUser = exports.registerUser = exports.getUserProfile = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
// Test Get User
const getUserProfile = async (req, res) => {
    console.log(req.body);
    const id = req.body;
    const user = await userModel_1.default.find({});
    console.log(user);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(401);
        throw new Error('User not found');
    }
};
exports.getUserProfile = getUserProfile;
// Register 
const registerUser = async (req, res) => {
    // console.log(req.body)
    try {
        // Check if the email is in use
        const { name, email, password } = req.body;
        const userExists = await userModel_1.default.findOne({ email });
        console.log('user exist', userExists);
        if (!name || !email || !password) {
            res.status(404)
                .send({ error: 'Please fill in all fields' });
        }
        else if (userExists) {
            res.status(404)
                .send({ error: 'Email already exists' });
            // throw new Error('User already exists')
        }
        else {
            // Step 1 - Create and save the user
            const user = await userModel_1.default.create({
                name,
                email,
                password
            });
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
                    token: (0, generateToken_1.default)(user._id)
                });
            }
        }
    }
    catch (err) {
        return res.status(500).send(err);
    }
};
exports.registerUser = registerUser;
// Login
const loginUser = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await userModel_1.default.findOne({ email });
    if (user && (await bcryptjs_1.default.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: (0, generateToken_1.default)(user._id)
        });
    }
    else {
        res.status(401)
            .send({ error: 'Invalid email or password' });
        // throw new Error('Invalid email or password')
    }
};
exports.loginUser = loginUser;
// Get current User Profile
const getCurrentUserProfile = async (req, res) => {
    console.log(req.body);
    res.status(200).json(req.user);
};
exports.getCurrentUserProfile = getCurrentUserProfile;
