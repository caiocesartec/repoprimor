export async function getDicas() {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      titulo: "Lorem ipsum dolor sit amet 1",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum nisi vel sapien viverra, nec euismod tortor dignissim. Aliquam erat volutpat. Proin interdum tellus sed lectus placerat, id gravida lorem pulvinar. Curabitur semper risus vel eros aliquet, feugiat ullamcorper sem posuere.",
      imagem: { url: "/receitas/bolo-chocolate.jpg" },
    },
    {
      titulo: "Sed do eiusmod tempor 2",
      descricao:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean rhoncus orci et lacus lobortis, quis sagittis metus hendrerit. Vivamus fringilla ligula elit, eu feugiat eros aliquet quis. Duis nec elit vulputate, posuere massa ac, malesuada urna.",
      imagem: { url: "/receitas/acompanhamentos.png" },
    },
    {
      titulo: "Ut enim ad minim veniam 3",
      descricao:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Pellentesque ac neque at turpis efficitur pulvinar. Suspendisse ut dignissim urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
      imagem: { url: "/receitas/panqueca-frango.jpg" },
    },
    {
      titulo: "Duis aute irure dolor 4",
      descricao:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. In et arcu sed nibh elementum aliquet. Nulla facilisi. Phasellus porttitor lacus sit amet elit accumsan, sed faucibus mi convallis. Morbi luctus dictum lectus.",
      imagem: { url: "/receitas/bolo-chocolate.jpg" },
    },
    {
      titulo: "Excepteur sint occaecat 5",
      descricao:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer finibus orci id massa tincidunt, sed bibendum tortor commodo. Vestibulum molestie mauris a justo volutpat, vitae tempor eros feugiat.",
      imagem: { url: "/receitas/acompanhamentos.png" },
    },
    {
      titulo: "Curabitur sit amet lorem 6",
      descricao:
        "Curabitur sit amet lorem eget urna ultricies gravida. Maecenas scelerisque sem vel augue elementum, non commodo nunc pretium. Donec fringilla urna nec quam convallis, vitae commodo turpis congue. Quisque dignissim, justo et blandit fermentum, leo lectus lobortis lorem.",
      imagem: { url: "/receitas/panqueca-frango.jpg" },
    },
  ];
}
