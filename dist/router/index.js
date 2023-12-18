"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./userRoutes/user"));
const editStyles_1 = __importDefault(require("./editStylesRoutes/editStyles"));
const images_1 = __importDefault(require("./imagesRoutes/images"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.status(200).json({ api: 'App blog is UP' });
});
router.use("/users", user_1.default);
router.use("/editstyle", editStyles_1.default);
router.use("/images", images_1.default);
exports.default = router;
