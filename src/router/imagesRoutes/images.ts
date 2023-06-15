import express, { Request, Response } from "express"
import { protect } from "../../middleware/authMiddleware";
import { getImages, postImages, getImage, updateImageDescription } from '../../controllers/imagesController'


const router = express.Router()

router.get("/", (getImages))
router.get('/id', (getImage))
router.post("/", protect, (postImages))
router.patch('/:id/description', updateImageDescription);

export default router;