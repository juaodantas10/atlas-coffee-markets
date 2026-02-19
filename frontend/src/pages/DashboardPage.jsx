import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

export function DashboardPage() {
  const { token } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const result = await api.getDashboard(token);
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    }
    loadData();
  }, [token]);

  if (error) return <p className="error-msg">{error}</p>;
  if (!data) return <p>Carregando dashboard...</p>;

  return (
    <section>
      <h2>Dashboard</h2>
      <p>{data.message}</p>
      <div className="cards-grid">
        <article className="card"><h3>Operações abertas</h3><strong>{data.metrics.openOperations}</strong></article>
        <article className="card"><h3>Alertas pendentes</h3><strong>{data.metrics.pendingAlerts}</strong></article>
        <article className="card"><h3>Último acesso</h3><strong>{new Date(data.metrics.lastAccess).toLocaleString('pt-BR')}</strong></article>
      </div>
    </section>
  );
}
