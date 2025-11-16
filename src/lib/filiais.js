export async function getReceitas() {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      nome: "Nome receita 1",
      endereco: "Rua Exemplo, 123 - Centro, São Paulo/SP",
      imagem: { url: "/receitas/bolo-chocolate.jpg" },
    },
    {
      nome: "Nome receita 2",
      endereco: "Av. Placeholder, 456 - Curitiba/PR",
      imagem: { url: "/receitas/acompanhamentos.png" },
    },
    {
      nome: "Nome receita 3",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/panqueca-frango.jpg" },
    },
    {
      nome: "Nome receita 4",
      endereco: "Rua Exemplo, 123 - Centro, São Paulo/SP",
      imagem: { url: "/receitas/bolo-chocolate.jpg" },
    },
    {
      nome: "Nome receita 5",
      endereco: "Av. Placeholder, 456 - Curitiba/PR",
      imagem: { url: "/receitas/acompanhamentos.png" },
    },
    {
      nome: "Nome receita 6",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/receitas/panqueca-frango.jpg" },
    },
  ];
}
