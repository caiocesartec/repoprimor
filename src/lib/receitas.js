export async function getReceitas() {
  const query = `
    {
      receitas {
        nodes {
          acf {
            nomeDaReceita
            linkDaReceita
            imagem {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `;

  function mapReceita(receita) {
    const acf = receita?.acf ?? {};

    return {
      nome: acf?.nomeDaReceita ?? "",
      imagem: {
        url: acf?.imagem?.node?.mediaItemUrl || "/placeholder.png",
      },
      linkReceita: {
        url: acf?.linkDaReceita || "",
      },
    };
  }

  const response = await fetch("https://new.primor.com.br/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  const { data } = await response.json();

  return data?.receitas?.nodes?.map(mapReceita) ?? [];
}