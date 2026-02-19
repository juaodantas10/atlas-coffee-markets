import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import coffeeRoutes from './routes/coffeeRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import { checkDatabaseConnection } from './config/db.js';
import { env } from './config/env.js';

const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());

app.get('/health', async (_, res) => {
  const dbStatus = await checkDatabaseConnection();
  res.status(200).json({ status: 'ok', dbStatus });
});

app.use('/auth', authRoutes);
app.use('/', dashboardRoutes);
app.use('/', coffeeRoutes);

app.use((_, res) => {
  res.status(404).json({ message: 'Rota não encontrada.' });
});

app.listen(env.port, () => {
  console.log(`API Atlas Mercados de Café rodando na porta ${env.port}`);
});
