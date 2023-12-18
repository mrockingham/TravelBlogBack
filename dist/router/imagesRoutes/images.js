"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../middleware/authMiddleware");
const imagesController_1 = require("../../controllers/imagesController");
const router = express_1.default.Router();
router.get("/", (imagesController_1.getImages));
router.get('/id', (imagesController_1.getImage));
router.post("/", authMiddleware_1.protect, (imagesController_1.postImages));
router.patch('/:id/description', imagesController_1.updateImageDescription);
exports.default = router;
