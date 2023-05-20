import express from 'express';
import user from './userRoutes/user'
import editStyle from './editStylesRoutes/editStyles'
import images from './imagesRoutes/images'


const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ api: 'App blog is UP' });
});

router.use("/users", user)
router.use("/editstyle", editStyle)
router.use("/images", images)


export default router;