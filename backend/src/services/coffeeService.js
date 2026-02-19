export function getCoffeeQuote() {
  const iceUsdLb = 2.05;
  const usdToBrl = 4.95;
  const poundsPerSack60kg = 132.277;

  const usdSack = Number((iceUsdLb * poundsPerSack60kg).toFixed(2));
  const brlSack = Number((usdSack * usdToBrl).toFixed(2));

  return {
    source: 'ICE (simulado)',
    updatedAt: new Date().toISOString(),
    iceUsdLb,
    usdToBrl,
    usdSack,
    brlSack
  };
}
