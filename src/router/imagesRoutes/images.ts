import express, { Request, Response } from "express"
import { protect } from "../../middleware/authMiddleware";
import { getImages, postImages, getImage } from '../../controllers/imagesController'


const router = express.Router()

router.get("/", (getImages))
router.get('/id', (getImage))
router.post("/", protect, (postImages))

export default router;