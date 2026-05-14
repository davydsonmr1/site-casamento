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
    id: "ferro",
    name: "Ferro de passar roupa para os noivos",
    priceCents: 8000,
    image: "/ferro.webp",
    purchaseLink: "https://www.mercadolivre.com.br/ferro-a-vapor-mondial-1200w-fvn-01-bl/p/MLB23999940#polycard_client=search_best-seller&tracking_id=bd6e4038-b19f-4f72-9e2b-3f91516df436&wid=MLB3729184180&sid=search",
    
  },
  {
    id: "inox",
    name: "Conjunto de Potes Inox para os Noivos",
    priceCents: 8000,
    image: "/potesinox.webp",
    purchaseLink: "https://shopee.com.br/product/842996464/20197086508?exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTElwAAAAwKhwF9yP2QL4gcpQGRkv8OL8oXOQdX-d2N82nwsmIc4POq5YcsRXxM_F1IK-UgbamgqsJmQat59I69SR6uvuJ-Wq78JGgSKKN2_kO_Fg3k40kObhVqmO3zX6CLkkFg9J-t6cynWN2YrRaOBt362rfXh2Spa3HUGqEXOMYR_JifL-2RaMS0lvMe_spu7VZW1SjJBKk&mmp_pid=an_18375560013&uls_trackid=55l6jbb401og&utm_campaign=id_aBCAkzckc3&utm_content=----&utm_medium=affiliates&utm_source=an_18375560013&utm_term=ewd8yhh2w2zs",
    
  },
  {
    id: "gasolina",
    name: "Ajuda na Gasolina pra passear",
    priceCents: 2000,
    image: "/moto.jpg",
    purchaseLink: "https://www.amazon.com.br/Pipoqueira-Brit%C3%A2nia-Pop-Time-IMPORTADOS/dp/B076BB2NCN?pd_rd_w=mkKx1&content-id=amzn1.sym.550666bb-9d24-483d-bc9e-4a297db376ce&pf_rd_p=550666bb-9d24-483d-bc9e-4a297db376ce&pf_rd_r=TP9E0NTAM6JQFW2ZEGV6&pd_rd_wg=IUDzb&pd_rd_r=8d578ba2-6a14-4dcd-ad80-96ddf702773d&pd_rd_i=B076BB2NCN&th=1&linkCode=sl2&tag=thiago02ec-20&linkId=4ef83528281b24ab6c5e8b3423804cfb&ref_=as_li_ss_tl",
    
  },
  {
    id: "pipoca",
    name: "Pipoqueira para os noivos assistirem filmes juntos",
    priceCents: 20000,
    image: "/pipoca.jpg",
    purchaseLink: "https://www.amazon.com.br/Pipoqueira-Brit%C3%A2nia-Pop-Time-IMPORTADOS/dp/B076BB2NCN?pd_rd_w=mkKx1&content-id=amzn1.sym.550666bb-9d24-483d-bc9e-4a297db376ce&pf_rd_p=550666bb-9d24-483d-bc9e-4a297db376ce&pf_rd_r=TP9E0NTAM6JQFW2ZEGV6&pd_rd_wg=IUDzb&pd_rd_r=8d578ba2-6a14-4dcd-ad80-96ddf702773d&pd_rd_i=B076BB2NCN&th=1&linkCode=sl2&tag=thiago02ec-20&linkId=4ef83528281b24ab6c5e8b3423804cfb&ref_=as_li_ss_tl",
  },
  {
    id: "chaleira",
    name: "Chaleira Elétrica",
    priceCents: 5000,
    image: "/chaleira.webp",
    purchaseLink: "https://www.mercadolivre.com.br/chaleira-eletrica-18l-1200w-unitermi-atacama/p/MLB13409957?matt_event_ts=1778789687128&matt_d2id=4e4cc861-43b2-47d7-8704-3da76675acfa&matt_tracing_id=f81f0452-1ce4-4ac2-9ad4-ba4e6813965a#reco_backend=item_decorator&reco_client=home_affiliate-profile&reco_item_pos=0&source=affiliate-profile&reco_backend_type=function&reco_id=db2df3b5-8888-4189-b9be-eaaf49260cd3&tracking_id=44d53610-ffd2-4866-a71e-9004afb6ed51&c_id=/home/card-featured/element&c_uid=1bb3d379-ef6b-427a-aa22-6d440917dcfc",
    
  },
  {
    id: "potes",
    name: "Conjunto de Potes para os Noivos",
    priceCents: 10000,
    image: "/potes.webp",
    purchaseLink: "https://www.mercadolivre.com.br/social/promos4m?matt_word=thiago&matt_tool=36000880&forceInApp=true&ref=BFe4jw0cyZwbqMw1ZiY2Gr82n6hFEwviWy0voz8YqmktAbo0%2Ff%2FRR0WaSrC%2BOoKPMCtRKRmEQNscUNaIB82%2BtQ9m0Go1yYsHLUdFQE3niGX7KNcL43jB3HHJ0dhLJOzV02wI6ExAooB3J44bshROWwXBT6drBacfrPaaqcfOH0xYck%2BD5Oo%2BNRx1zHswJDwnklGtLGQ%3D",
    
  },
  {
    id: "mixer",
    name: "Mixer para os Noivos",
    priceCents: 5000,
    image: "/mixer.jpg",
    purchaseLink: "https://www.amazon.com.br/gp/product/B091V73RF5?th=1&linkCode=sl2&tag=gb0651-20&linkId=32e0e8b618908c90a47737a180fdbf1e&ref_=as_li_ss_tl",
    
  },
];

export function formatBRL(cents: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}
