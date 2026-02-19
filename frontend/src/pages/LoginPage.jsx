import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="auth-card">
      <h2>Acessar plataforma</h2>
      <p>Monitore mercado e simule margens de forma profissional.</p>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" type="email" required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" type="password" required />
        <button type="submit">Entrar</button>
      </form>
      {error ? <span className="error-msg">{error}</span> : null}
      <Link to="/registro">Criar conta</Link>
    </section>
  );
}
