export async function getProdutos() {
  const query = `
  {
    produtos {
      nodes {
        slug
        camposDeProduto {
          nome
          descricao
          sobre
          ingredientes
          informacoesNutricionais
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

  const response = await fetch("https://new.primor.com.br/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  const { data } = await response.json();

  function parseNutricional(texto) {
    if (!texto) return [];

    const linhas = texto
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    return linhas.map((linha) => {
      const [left, right] = linha.split("— VD");

      const titulo = left.split(":")[0].trim();
      const quantidade = left.split(":")[1]?.trim() || "";
      const vd = right?.trim() || "";

      return { titulo, quantidade, vd };
    });
  }

  function mapProduto(p) {
    const acf = p.camposDeProduto ?? {};

    return {
      slug: p.slug,
      nome: acf.nome || "",
      descricao: acf.descricao || "",
      sobre: acf.sobre || "",
      ingredientes: acf.ingredientes || "",
      nutricionalItens: parseNutricional(acf.informacoesNutricionais || ""),
      imagem: acf.imagem?.node?.mediaItemUrl ?? "/placeholder.png",
    };
  }

  return data?.produtos?.nodes?.map(mapProduto) ?? [];
}