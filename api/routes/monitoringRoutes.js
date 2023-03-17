import express from 'express';
import { getBackUp, getSizeTables } from '../controllers/monitoringController';
const app = express();

const monitoringRoutes = express.Router();


monitoringRoutes.get("/monitoring", getSizeTables);
monitoringRoutes.get("/backup", getBackUp);

export default monitoringRoutes;