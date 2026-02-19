import { Router } from 'express';
import { dashboard } from '../controllers/dashboardController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const dashboardRoutes = Router();

dashboardRoutes.get('/dashboard', authMiddleware, dashboard);

export default dashboardRoutes;
