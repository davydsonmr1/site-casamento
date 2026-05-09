export type Gift = {
  id: string;
  name: string;
  priceCents: number;
  image: string;
};

export const GIFTS: Gift[] = [
  { id: "jantar-paris", name: "Jantar Romântico em Paris", priceCents: 50000, image: "/gift1.jpg" },
  { id: "lua-de-mel", name: "Cotas para Lua de Mel", priceCents: 100000, image: "/gift2.jpg" },
  { id: "jogo-panelas", name: "Jogo de Panelas", priceCents: 30000, image: "/gift3.jpg" },
  { id: "cama-king", name: "Roupa de Cama King", priceCents: 45000, image: "/gift4.jpg" },
  { id: "vinhos", name: "Adega de Vinhos", priceCents: 60000, image: "/gift5.jpg" },
  { id: "cafeteira", name: "Cafeteira Italiana", priceCents: 35000, image: "/gift6.jpg" },
  { id: "vivencia-spa", name: "Vivência de Spa a Dois", priceCents: 80000, image: "/gift7.jpg" },
  { id: "passagem", name: "Cota de Passagem Aérea", priceCents: 120000, image: "/gift8.jpg" },
];

export function formatBRL(cents: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}
