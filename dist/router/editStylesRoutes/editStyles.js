"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const editStyleContreller_1 = require("../../controllers/editStyleContreller");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/", (editStyleContreller_1.getEditStyle));
router.post("/", authMiddleware_1.protect, (editStyleContreller_1.postEditStyle));
router.put("/", authMiddleware_1.protect, (editStyleContreller_1.putEditStyle));
exports.default = router;
