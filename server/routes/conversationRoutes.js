import express from 'express';
import { newConversation } from '../controllers/conversationController.js';
const router = express.Router();


router.post('/create', newConversation);

export default router;