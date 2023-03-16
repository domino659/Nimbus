import express from 'express';
import { login, register } from '../controllers/userController.js';
const app = express();

const userRoutes = express.Router();

//Auth
userRoutes.get("/", login);
userRoutes.post("/", register);

export default userRoutes;