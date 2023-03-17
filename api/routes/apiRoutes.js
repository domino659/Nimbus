import express from 'express';
import userRoutes from "./userRoutes.js";
import fileRoutes from "./fileRoutes.js";

const app = express();

const apiRoutes = express.Router();

apiRoutes.use('/user', userRoutes);
apiRoutes.use('/file', fileRoutes);


export default apiRoutes;