export const money = num => {
  return `R$${Math.round(num * 0.01 * 100) / 100}`;
};
