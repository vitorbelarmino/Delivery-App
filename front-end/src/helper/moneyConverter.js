export default function converteEmReal(valor) {
  const converted = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  return converted;
}
