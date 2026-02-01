export const WA_NUMBER = "6285174172324";

export function buildWhatsAppLink(message, number = WA_NUMBER) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
