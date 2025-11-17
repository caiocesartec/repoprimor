export async function getReceitas() {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      nome: "Arroz-Doce",
      endereco: "Rua Exemplo, 123 - Centro, São Paulo/SP",
      imagem: { url: "/receitas/receitas-arroz-doce-banner.jpg" },
      linkReceita: {url: "https://www.primor.com.br/receitas/sobremesa-arroz-doce"},
    },
    {
      nome: "Baião de Dois",
      endereco: "Av. Placeholder, 456 - Curitiba/PR",
      imagem: { url: "/receitas/receitas-baiao-de-dois-banner.jpg" },
      linkReceita: {url: "https://www.primor.com.br/receitas/almoco-baiao-de-dois"},

    },
    {
      nome: "Biscoitinho de Côco",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/receita-lanche-biscoitinho-de-coco-banner20240914202637.jpg" },
      linkReceita: {url: "https://www.primor.com.br/receitas/lanche-biscoitinho-de-coco"},
    },
    {
      nome: "Bolo Cremoso de Milho",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/receitas-bolo-cremoso-de-milho-banner.jpg" },
      linkReceita: {url: "https://www.primor.com.br/receitas/sobremesa-bolo-cremoso-de-milho"},
    },
    {
      nome: "Arroz de Cuxá",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/receitas-arroz-de-cuxa-banner.jpg" },
      linkReceita: {url: "https://www.primor.com.br/receitas/almoco-arroz-de-cuxa"},
    },
    {
      nome: "Vatapá",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/receitas-vatapa-banner.jpg" },
      linkReceita: {url: "https://www.primor.com.br/receitas/lanche-vatapa"},
    },
    {
      nome: "Bolo de Fubá",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/receitas-bolo-de-fuba-banner.jpg" },
      linkReceita: {url: "https://www.primor.com.br/receitas/sobremesa-bolo-de-fuba"},
    },
    {
      nome: "Bolo de Macaxeira",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/receitas-bolo-de-macaxeira-banner.jpg" },
      linkReceita: {url: "https://www.primor.com.br/receitas/sobremesa-bolo-de-macaxeira"},
    },
  ];
}
