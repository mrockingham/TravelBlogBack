"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGO_URI || '';
const connectDB = async () => {
    console.log('MONGODB_URI', MONGODB_URI);
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose_1.default.connect(MONGODB_URI, options);
        console.log('MongoDB connected');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
exports.default = connectDB;
