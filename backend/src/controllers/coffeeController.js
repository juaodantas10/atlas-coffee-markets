import { getCoffeeQuote } from '../services/coffeeService.js';

export function quote(req, res) {
  const data = getCoffeeQuote();
  return res.status(200).json(data);
}
