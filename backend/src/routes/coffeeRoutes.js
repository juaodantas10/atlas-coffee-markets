import { Router } from 'express';
import { quote } from '../controllers/coffeeController.js';

const coffeeRoutes = Router();

coffeeRoutes.get('/coffee/quote', quote);

export default coffeeRoutes;
