export async function getVagas() {
  await new Promise((r) => setTimeout(r, 200)); 

  return [
    {
      tituloVaga: "Lorem ipsum dolor sit amet",
      descricaoVaga:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel augue nec risus vehicula placerat.",
      responsabilidades: `Lorem ipsum dolor sit amet\nConsectetur adipiscing elit\nSed do eiusmod tempor`,
      qualificacoes: `Lorem ipsum dolor sit amet\nDuis aute irure dolor in reprehenderit\nUt enim ad minim veniam`,
    },
    {
      tituloVaga: "Lorem ipsum",
      descricaoVaga:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt erat in arcu consectetur.",
      responsabilidades: `Lorem ipsum dolor sit amet\nUt labore et dolore magna aliqua\nExcepteur sint occaecat`,
      qualificacoes: `Lorem ipsum dolor sit amet\nConsectetur adipiscing elit\nInteger molestie lorem`,
    },
  ];
}
