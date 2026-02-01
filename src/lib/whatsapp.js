export const WA_NUMBER = "6281217376263";

export function buildWhatsAppLink(message, number = WA_NUMBER) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
