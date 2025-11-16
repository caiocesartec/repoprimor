// export async function fetchDatoCMS(query) {
//   try {
//     const res = await fetch("https://graphql.datocms.com/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.DATO_API_TOKEN}`,
//       },
//       body: JSON.stringify({ query }),
//     });

//     if (!res.ok) {
//       const text = await res.text();
//       console.error("Erro no DatoCMS:", res.status, text);
//       return null;
//     }

//     const data = await res.json();
//     return data.data;
//   } catch (err) {
//     console.error("Erro ao chamar DatoCMS:", err);
//     return null;
//   }
// }