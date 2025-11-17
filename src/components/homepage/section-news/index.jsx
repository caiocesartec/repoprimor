import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";

export const SectionNews = () => {
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
        <SectionTitle width="380px">A cremosa de Verdade</SectionTitle>

        <p className={styles.description}>
          Todas podem ser cremosas, mas só Delícia é cremoooosa DE VERDADE.
          Somos a única margarina com creme de leite do mercado, que além de ter
          uma textura ultra-mega-blaster cremosa, é mais fácil de espalhar e
          muito mais indulgente para você.
        </p>

        <div className={styles.fullBarWrapper}>
          <div className={styles.fullBarTrack}>
            <Image
              src="/genericas/barra_01.jpg"
              alt="Barra decorativa 1"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.jpg"
              alt="Barra decorativa 2"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_01.jpg"
              alt="Barra decorativa 1 repeate"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.jpg"
              alt="Barra 2 repeat"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
          </div>
        </div>

        <SectionTitle>Nossos Produtos</SectionTitle>
       <p className={styles.description}>
          Texturas que ajudam a significar
          nossa origem, trazem um tom
          de criatividade e um convite a
          exploramos todas as possibilidades
          que a margarina oferece na culinária.
        </p>


        <div className={styles.productsGrid}>
          {cards.map((card) => (
            <Link className={styles.productCardLink} href={`/produtos/${card.slug}`} key={card.slug}>
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    quality={100}
                    className={styles.productImage}
                  />
                </div>

                <h3 className={styles.productTitle}>{card.title}</h3>
                <p className={styles.productText}>{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.fullBarWrapper}>
          <div className={styles.fullBarTrack}>
            <Image
              src="/genericas/barra_01.jpg"
              alt="Barra decorativa 1"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.jpg"
              alt="Barra decorativa 2"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_01.jpg"
              alt="Barra decorativa 1 repeate"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
            <Image
              src="/genericas/barra_02.jpg"
              alt="Barra 2 repeat"
              width={600}
              height={120}
              className={styles.fullBar}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
