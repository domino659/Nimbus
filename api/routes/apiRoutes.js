import express from 'express';
import userRoutes from "./userRoutes.js";
import monitoringRoutes from './userMonitoring.js';
const app = express();

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/monitoring', monitoringRoutes)

export default apiRoutes;