export type Gift = {
  id: string;
  name: string;
  priceCents: number;
  image: string;
  // URL externa (Amazon, Mercado Livre, loja, etc.) — opcional. Se preenchida,
  // o modal do PIX exibe um link "comprar diretamente" abaixo da chave.
  purchaseLink?: string;
};

// Cole a URL real em `purchaseLink` para cada item. Enquanto estiver "",
// o modal apenas mostra o QR Code/PIX (o bloco do link fica oculto).
export const GIFTS: Gift[] = [
  {
    id: "jantar-romantico",
    name: "Jantar Romântico",
    priceCents: 10000,
    image: "/gift1.jpg",
    purchaseLink: "",
  },
  {
    id: "lua-de-mel",
    name: "Ajuda para Lua de Mel",
    priceCents: 20000,
    image: "/gift2.jpg",
    purchaseLink: "",
  },
  {
    id: "jogo-panelas",
    name: "Jogo de Panelas",
    priceCents: 40000,
    image: "/gift3.jpg",
    purchaseLink: "",
  },
  {
    id: "cama-king",
    name: "Roupa de Cama",
    priceCents: 15000,
    image: "/gift4.jpg",
    purchaseLink: "",
  },
  {
    id: "ferramentas",
    name: "Maleta de Ferramentas pro Noivo",
    priceCents: 25000,
    image: "/gift5.jpg",
    purchaseLink: "",
  },
  {
    id: "cafe",
    name: "Café dos Noivos",
    priceCents: 5000,
    image: "/gift6.jpg",
    purchaseLink: "",
  },
  {
    id: "hamburguer",
    name: "Hambúrguer dos Noivos",
    priceCents: 8000,
    image: "/gift7.jpg",
    purchaseLink: "",
  },
  {
    id: "gasolina",
    name: "Ajuda na Gasolina pra passear",
    priceCents: 2000,
    image: "/gift8.jpg",
    purchaseLink: "",
  },
];

export function formatBRL(cents: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}
