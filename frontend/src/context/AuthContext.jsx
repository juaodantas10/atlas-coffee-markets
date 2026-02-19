import { createContext, useContext, useMemo, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => {
    const raw = localStorage.getItem('atlas-session');
    return raw ? JSON.parse(raw) : null;
  });

  async function login(email, password) {
    const data = await api.login({ email, password });
    const nextSession = { token: data.token, user: data.user };
    localStorage.setItem('atlas-session', JSON.stringify(nextSession));
    setSession(nextSession);
  }

  function logout() {
    localStorage.removeItem('atlas-session');
    setSession(null);
  }

  const value = useMemo(() => ({
    token: session?.token || null,
    user: session?.user || null,
    isAuthenticated: Boolean(session?.token),
    login,
    logout
  }), [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth precisa ser usado dentro de AuthProvider');
  }
  return ctx;
}
