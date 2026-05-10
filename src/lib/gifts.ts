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
    image: "/jantar.jpeg",
    
  },
  {
    id: "lua-de-mel",
    name: "Ajuda para Lua de Mel",
    priceCents: 20000,
    image: "/lua.webp",
    
  },
  {
    id: "jogo-panelas",
    name: "Jogo de Panelas",
    priceCents: 40000,
    image: "/jogo.jpg",
    purchaseLink: "https://www.mercadolivre.com.br/jogo-de-panelas-inducao-antiaderente-cermica-10-pecas-ppg-pfoa-free-baunilha/p/MLB62276296?pdp_filters=item_id%3AMLB5946286600&from=gshop&matt_tool=22783954&matt_word=&matt_source=google&matt_campaign_id=23351282105&matt_ad_group_id=193694047367&matt_match_type=&matt_network=g&matt_device=c&matt_creative=787871588777&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB62276296-product&matt_product_partition_id=2389601385506&matt_target_id=aud-1966852281496:pla-2389601385506&cq_src=google_ads&cq_cmp=23351282105&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23351282105&gbraid=0AAAAAD93qcCGwVZe4BYZr2pzrAetwQ1VQ&gclid=CjwKCAjwtvvPBhBuEiwAPMijr-X0znn6ThYC0knwm2nnIHCmD1lnG6rFBFP0AAbLlJOUWIW3kbeqxxoCH0sQAvD_BwE",
  },
  {
    id: "cama-king",
    name: "Roupa de Cama",
    priceCents: 25000,
    image: "/camacasal.webp",
    purchaseLink: "https://www.mercadolivre.com.br/conjunto-casal-queen-6-unidades-completo-cama-box-cor-preto-desenho-do-tecido-aconchego/p/MLB44399759#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=9&type=product&tracking_id=1a4bb018-5d7a-4e13-85b7-acdaab14df79&wid=MLB5208847200&sid=search",
  },
  {
    id: "ferramentas",
    name: "Maleta de Ferramentas pro Noivo",
    priceCents: 25000,
    image: "/maleta.webp",
    purchaseLink: "https://www.mercadolivre.com.br/kit-chaves-jogo-ferramentas-maleta-completa-200-pecas-servicos-gerais-bits-fenda-philips-allen/p/MLB51762370#polycard_client=search-desktop&be_origin=backend&search_layout=grid&position=12&type=product&tracking_id=4b79b01b-13bf-4935-945b-edbbdf9264a1&wid=MLB5483910906&sid=search",
  },
  {
    id: "cafe",
    name: "Café dos Noivos",
    priceCents: 5000,
    image: "/cafe.jpg",
    
  },
  {
    id: "hamburguer",
    name: "Hambúrguer dos Noivos",
    priceCents: 8000,
    image: "/hamburguer.jpg",
    
  },
  {
    id: "gasolina",
    name: "Ajuda na Gasolina pra passear",
    priceCents: 2000,
    image: "/moto.jpg",
    
  },
];

export function formatBRL(cents: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}
