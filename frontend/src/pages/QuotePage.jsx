import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function QuotePage() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadQuote() {
      try {
        const result = await api.getCoffeeQuote();
        setQuote(result);
      } catch (err) {
        setError(err.message);
      }
    }

    loadQuote();
  }, []);

  if (error) return <p className="error-msg">{error}</p>;
  if (!quote) return <p>Carregando cotação...</p>;

  return (
    <section>
      <h2>Cotação de Café</h2>
      <div className="cards-grid">
        <article className="card"><h3>ICE (USD/lb)</h3><strong>{quote.iceUsdLb}</strong></article>
        <article className="card"><h3>USD/BRL</h3><strong>{quote.usdToBrl}</strong></article>
        <article className="card"><h3>USD/saca</h3><strong>{quote.usdSack}</strong></article>
        <article className="card"><h3>BRL/saca</h3><strong>{quote.brlSack}</strong></article>
      </div>
      <p>Fonte: {quote.source}. Atualizado em {new Date(quote.updatedAt).toLocaleString('pt-BR')}.</p>
    </section>
  );
}
