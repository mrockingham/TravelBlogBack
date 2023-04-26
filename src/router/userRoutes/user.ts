import express, { Request, Response } from "express"
import { registerUser, getUserProfile, loginUser, getCurrentUserProfile } from "../../controllers/userController"
import { protect } from "../../middleware/authMiddleware"

const router = express.Router()


router.get("/test", (req: Request, res: Response) => {
    res.json('get called')
})
router.get("/", getUserProfile)
router.get("/current", protect, getCurrentUserProfile)
router.post('/', registerUser)
router.post('/login', loginUser)
// router.get("/verify/:token", verifyUser)
// router.post("/profile/", getUserProfile)
// router.get("/verify/:token", verifyUser, (req, res) => {
//     res.render("verified", { title: "DeverNote" })
// })
// router.post("/verifypw", forgotPasswordLink, (req, res) => {
//     res.render("verifiedPassword", { title: "DeverNote" })
// })

// router.post("/reset", resetPassword)


export default router;