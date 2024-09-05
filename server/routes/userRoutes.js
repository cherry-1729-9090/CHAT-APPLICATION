import express from 'express';
import { addUser, getAllUsers } from '../controllers/userController.js';
const router = express.Router();

router.post('/create',addUser);
router.get('/getAll',getAllUsers)

export default router;