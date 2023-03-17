import express from 'express';
import { dropFile } from '../controllers/fileController.js';
const app = express();

const fileRoutes = express.Router();

//Auth
fileRoutes.post("/drop", dropFile);

export default fileRoutes;