import express from 'express';
import userRoutes from "./userRoutes.js";
import projectRoutes from "./projectRoutes.js";
const app = express();

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/project', projectRoutes);

export default apiRoutes;