import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    try {
      await api.register(form);
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="auth-card">
      <h2>Criar conta</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nome" value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} required />
        <input placeholder="E-mail" type="email" value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} required />
        <input placeholder="Senha" type="password" value={form.password} onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))} required />
        <button type="submit">Cadastrar</button>
      </form>
      {error ? <span className="error-msg">{error}</span> : null}
      <Link to="/login">Já tenho conta</Link>
    </section>
  );
}
