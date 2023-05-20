import express, { Request, Response } from "express"
import { getEditStyle, postEditStyle, putEditStyle } from '../../controllers/editStyleContreller'
import { protect } from "../../middleware/authMiddleware";

const router = express.Router()

router.get("/", (getEditStyle))

router.post("/", protect, (postEditStyle))
router.put("/", protect, (putEditStyle))


export default router;