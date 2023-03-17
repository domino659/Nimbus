import express from 'express';
import { createProject } from '../controllers/projectController.js';

const app = express();

const projectRoutes = express.Router();

projectRoutes.post("/createProject", createProject);

export default projectRoutes;