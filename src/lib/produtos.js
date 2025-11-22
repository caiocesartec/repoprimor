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

// export const produtos = [
//   {
//     slug: "primor-original",
//     nome: "Margarina Primor 500g",
//     descricao:
//       "Seja no forno, no bolo preferido ou no toque final do cuscuz, a margarina Primor é a escolha certa para quem cozinha com amor.",
//     imagem: "/produtos/primor_original.png",

//     sobre: `
// Seja no forno, preparando seu bolo preferido ou no toque final daquele cuscuz quentinho, 
// a margarina Primor é a escolha certa para quem cozinha com amor. Tenha sempre em casa!
// `,

//     ingredientes: `
// Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, sal, cloreto de potássio, 
// emulsificantes: mono e diglicerídeos de ácidos graxos, lecitina de soja* e ésteres de poliglicerol 
// de ácidos graxos, aromatizantes, conservador benzoato de sódio, corante natural de urucum e cúrcuma, 
// antioxidantes: EDTA cálcio dissódico, BHT e ácido cítrico e acidulante ácido láctico.

// *(geneticamente modificado a partir de Streptomyces viridochromogenes e/ou Agrobacterium tumefaciens 
// e/ou Bacillus thuringiensis)

// NÃO CONTÉM GLÚTEN.  
// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA. PODE CONTER LEITE.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 54 kcal = 227 kJ — VD 3%
// Carboidratos: 0 g — VD 0%
// Proteínas: 0 g — VD 0%
// Gorduras totais: 6 g — VD 11%
// Gorduras saturadas: 1,9 g — VD 9%
// Gorduras trans: 0 g — VD **
// Fibra alimentar: 0 g — VD 0%
// Sódio: 65 mg — VD 3%
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "54 kcal = 227 kJ", vd: "3%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "0%" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "0%" },
//       { titulo: "Gorduras totais", quantidade: "6 g", vd: "11%" },
//       { titulo: "Gorduras saturadas", quantidade: "1,9 g", vd: "9%" },
//       { titulo: "Gorduras trans", quantidade: "0 g", vd: "**" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "0%" },
//       { titulo: "Sódio", quantidade: "65 mg", vd: "3%" },
//     ],
//   },

//   {
//     slug: "primor-balde",
//     nome: "Margarina Primor Balde 3kg",
//     descricao:
//       "Margarina versátil, ideal para uso culinário e preparo de massas, frituras e receitas profissionais.",
//     imagem: "/produtos/primor_balde.png",

//     sobre: `
// Seja no forno, preparando seu bolo preferido ou no toque final daquele cuscuz quentinho, 
// a margarina Primor é a escolha certa para quem cozinha com amor. Tenha sempre em casa!
// `,

//     ingredientes: `
// Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, sal, emulsificantes: 
// mono e diglicerídeos de ácidos graxos, ésteres de poliglicerol de ácidos graxos e lecitina de soja*, 
// aromatizantes, conservador benzoato de sódio, corante natural de urucum e cúrcuma, antioxidantes: 
// EDTA cálcio dissódico, BHT e ácido cítrico e acidulante ácido láctico.

// ALÉRGICOS: CONTÉM DERIVADOS DE SOJA. PODE CONTER LEITE.  
// NÃO CONTÉM GLÚTEN.
// `,

//     nutricional: `
// Porção de 10g (1 colher de sopa)

// Valor energético: 54 kcal  
// Carboidratos: 0 g  
// Proteínas: 0 g  
// Gorduras totais: 6 g  
// Gorduras saturadas: 2,2 g  
// Gorduras trans: 0,1 g  
// Fibras: 0 g  
// Sódio: 60 mg  
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "54 kcal", vd: "3%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "0%" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "0%" },
//       { titulo: "Gorduras totais", quantidade: "6 g", vd: "9%" },
//       { titulo: "Gorduras saturadas", quantidade: "2,2 g", vd: "11%" },
//       { titulo: "Gorduras trans", quantidade: "0,1 g", vd: "5%" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "0%" },
//       { titulo: "Sódio", quantidade: "60 mg", vd: "3%" },
//     ],
//   },

//   {
//     slug: "primor-gordura-vegetal",
//     nome: "Gordura Vegetal 500g",
//     descricao:
//       "Gordura vegetal ideal para preparo de massas, frituras e aplicações culinárias intensas.",
//     imagem: "/produtos/primor_gordura.png",

//     sobre: `
// Seja no forno, preparando seu bolo preferido ou no toque final daquele cuscuz quentinho, 
// a margarina Primor é a escolha certa para quem cozinha com amor. Tenha sempre em casa!
// `,

//     ingredientes: `
// Gordura de palma e antioxidantes BHT e ácido cítrico.

// ALÉRGICOS: PODE CONTER SOJA.  
// NÃO CONTÉM GLÚTEN.
// `,

//     nutricional: `
// Porção 10g (1 colher de sopa)

// Valor energético: 90 kcal — VD 5%
// Carboidratos: 0 g — VD 0%
// Proteínas: 0 g — VD 0%
// Gorduras totais: 10 g — VD 15%
// Gorduras saturadas: 5,1 g — VD 26%
// Gorduras trans: 0,1 g — VD 5%
// Fibras: 0 g — VD 0%
// Sódio: 0 mg — VD 0%
// `,

//     nutricionalItens: [
//       { titulo: "Valor energético", quantidade: "90 kcal", vd: "5%" },
//       { titulo: "Carboidratos", quantidade: "0 g", vd: "0%" },
//       { titulo: "Proteínas", quantidade: "0 g", vd: "0%" },
//       { titulo: "Gorduras totais", quantidade: "10 g", vd: "15%" },
//       { titulo: "Gorduras saturadas", quantidade: "5,1 g", vd: "26%" },
//       { titulo: "Gorduras trans", quantidade: "0,1 g", vd: "5%" },
//       { titulo: "Fibra alimentar", quantidade: "0 g", vd: "0%" },
//       { titulo: "Sódio", quantidade: "0 mg", vd: "0%" },
//     ],
//   },
// ];
