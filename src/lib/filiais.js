export async function getFiliais() {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      nome: "Lorem Ipsum Dolor",
      endereco: "Rua Exemplo, 123 - Centro, São Paulo/SP",
      imagem: { url: "/mock/filial-1.jpg" },
    },
    {
      nome: "Sit Amet Consectetur",
      endereco: "Av. Placeholder, 456 - Curitiba/PR",
      imagem: { url: "/mock/filial-2.jpg" },
    },
    {
      nome: "Adipiscing Elit",
      endereco: "Praça Mock 789 - Belo Horizonte/MG",
      imagem: { url: "/mock/filial-3.jpg" },
    },
  ];
}
