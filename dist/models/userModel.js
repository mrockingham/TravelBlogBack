"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
    },
    //will add later
    // verified: {
    //     type: Boolean,
    //     default: false
    // },
    // verifiedPass: {
    //     type: Boolean,
    //     default: true
    // },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    roles: {
        type: Number,
        required: false,
    },
}, {
    timestamps: true,
});
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcryptjs_1.default.compare(enteredPassword, this.password);
};
userSchema.methods.generateVerificationToken = function () {
    const user = this;
    const verificationToken = jsonwebtoken_1.default.sign({ ID: user._id }, process.env.USER_VERIFICATION_TOKEN_SECRET || '', { expiresIn: "7d" });
    return verificationToken;
};
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcryptjs_1.default.genSalt(10);
    this.password = await bcryptjs_1.default.hash(this.password, salt);
});
const User = mongoose_1.default.model('user', userSchema);
exports.default = User;
