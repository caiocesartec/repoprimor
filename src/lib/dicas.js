export async function getDicas() {
  const query = `
    {
      dicas {
        nodes {
          title
          camposDaDica {            
            nomeDaDica
            descricaoDaDica
            linkDaDica
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

  function mapDica(dica) {
    const acf = dica?.camposDaDica ?? {};

    return {
      titulo: acf?.nomeDaDica ?? "",
      detalhesDaDica: acf?.descricaoDaDica ?? "",
      imagem: acf?.imagem?.node?.mediaItemUrl || "/placeholder.png",
      href: acf?.linkDaDica || null,
    };
  }

  let data;
  try {
    const response = await fetch("https://new.primor.com.br/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      cache: "no-store",
    });

    const json = await response.json();
    data = json.data;
  } catch (err) {
    // console.error(err);
    return [];
  }

  return data?.dicas?.nodes?.map(mapDica) ?? [];
}