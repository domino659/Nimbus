import express from 'express';
import { login, register } from '../controllers/userController.js';
const app = express();

const userRoutes = express.Router();

//Auth
userRoutes.post("/login", login);
userRoutes.post("/register", register);

export default userRoutes;