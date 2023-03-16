import express from 'express';
import userRoutes from "./userRoutes.js";
const app = express();

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);

export default apiRoutes;