import { Pool } from 'pg';
import { env } from './env.js';

export const pool = new Pool({
  host: env.db.host,
  port: env.db.port,
  user: env.db.user,
  password: env.db.password,
  database: env.db.name
});

export async function checkDatabaseConnection() {
  try {
    await pool.query('SELECT 1');
    return { ok: true, message: 'Conexão com PostgreSQL pronta para uso.' };
  } catch (error) {
    return {
      ok: false,
      message: 'Banco não conectado. Configure as variáveis de ambiente para produção.',
      error: error.message
    };
  }
}
