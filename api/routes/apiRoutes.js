import express from 'express';
import userRoutes from "./userRoutes.js";
import projectRoutes from "./projectRoutes.js";
// import monitoringRoutes from './monitoringRoutes.js';

const app = express();

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/project', projectRoutes);
// apiRoutes.use('/monitoring', monitoringRoutes)

export default apiRoutes;