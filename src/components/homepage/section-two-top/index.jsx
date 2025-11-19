import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";

export const SectionTwoTop = () => {
  const cards = [
  {
    icon: "/produtos/primor_original.png",
    title: "Margarina Primor 500g",
    text: "A margarina perfeita para forno, fogão e receitas do dia a dia.",
    slug: "primor-original",
  },
  {
    icon: "/produtos/primor_balde.png",
    title: "Margarina Primor Balde 3kg",
    text: "Ideal para uso culinário intenso, com sabor e performance profissional.",
    slug: "primor-balde",
  },
  {
    icon: "/produtos/primor_gordura.png",
    title: "Gordura Vegetal 500g",
    text: "Gordura vegetal ideal para massas, frituras e usos culinários diversos.",
    slug: "primor-gordura-vegetal",
  },
];

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <SectionTitle width="380px">Sabor que aprimora</SectionTitle>

        <p className={styles.description}>
        Só Primor tem sabor de Primor. Nenhuma outra margarina é
        capaz de dar o sabor que eu amo nas minhas receitas! Seja
        pra espalhar no cuscuz do café da manhã ou pra fazer o bife
        acebolado do almoço, ela deixa TUDO muito mais gostoso.
        </p>
      </div>
    </section>
  );
};
