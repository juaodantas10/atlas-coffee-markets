import { useMemo, useState } from 'react';

const POUNDS_PER_SACK_60KG = 132.277;

export function SimulatorPage() {
  const [iceUsdLb, setIceUsdLb] = useState(2.05);
  const [usdToBrl, setUsdToBrl] = useState(4.95);
  const [purchasePrice, setPurchasePrice] = useState(1150);
  const [salePrice, setSalePrice] = useState(1300);
  const [quantity, setQuantity] = useState(100);

  const result = useMemo(() => {
    const usdSack = iceUsdLb * POUNDS_PER_SACK_60KG;
    const brlSack = usdSack * usdToBrl;
    const unitMargin = salePrice - purchasePrice;
    const totalMargin = unitMargin * quantity;

    return {
      usdSack,
      brlSack,
      unitMargin,
      totalMargin
    };
  }, [iceUsdLb, purchasePrice, quantity, salePrice, usdToBrl]);

  return (
    <section>
      <h2>Simulador de Margem</h2>
      <div className="simulator-grid">
        <label>Preço ICE (USD/lb)<input type="number" step="0.01" value={iceUsdLb} onChange={(e) => setIceUsdLb(Number(e.target.value))} /></label>
        <label>Câmbio USD/BRL<input type="number" step="0.01" value={usdToBrl} onChange={(e) => setUsdToBrl(Number(e.target.value))} /></label>
        <label>Preço compra (BRL/saca)<input type="number" step="0.01" value={purchasePrice} onChange={(e) => setPurchasePrice(Number(e.target.value))} /></label>
        <label>Preço venda (BRL/saca)<input type="number" step="0.01" value={salePrice} onChange={(e) => setSalePrice(Number(e.target.value))} /></label>
        <label>Quantidade (sacas)<input type="number" step="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} /></label>
      </div>

      <div className="cards-grid">
        <article className="card"><h3>USD/saca (60kg)</h3><strong>{result.usdSack.toFixed(2)}</strong></article>
        <article className="card"><h3>BRL/saca</h3><strong>{result.brlSack.toFixed(2)}</strong></article>
        <article className="card"><h3>Margem unitária</h3><strong>{result.unitMargin.toFixed(2)}</strong></article>
        <article className="card"><h3>Margem total</h3><strong>{result.totalMargin.toFixed(2)}</strong></article>
      </div>
    </section>
  );
}
