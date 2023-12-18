"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controllers/userController");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = express_1.default.Router();
router.get("/test", (req, res) => {
    res.json('get called');
});
router.get("/", userController_1.getUserProfile);
router.get("/current", authMiddleware_1.protect, userController_1.getCurrentUserProfile);
router.post('/', userController_1.registerUser);
router.post('/login', userController_1.loginUser);
// router.get("/verify/:token", verifyUser)
// router.post("/profile/", getUserProfile)
// router.get("/verify/:token", verifyUser, (req, res) => {
//     res.render("verified", { title: "DeverNote" })
// })
// router.post("/verifypw", forgotPasswordLink, (req, res) => {
//     res.render("verifiedPassword", { title: "DeverNote" })
// })
// router.post("/reset", resetPassword)
exports.default = router;
