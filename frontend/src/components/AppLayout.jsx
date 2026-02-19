import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function AppLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>Atlas Mercados de Café</h1>
        <p>Operador: {user?.name}</p>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/cotacao">Cotação</Link>
          <Link to="/simulador">Simulador</Link>
        </nav>
        <button onClick={logout} type="button">Sair</button>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
