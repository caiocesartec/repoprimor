import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const SectionNews = () => {
  const cards = [
    {
      icon: "/produtos/pote-creme-500.png",
      title: "Delícia com creme de leite",
      text: "A Delícia com creme de leite traz uma explosão de sabor e muita cremosidade.",
      slug: "delicia-com-creme-de-leite",
    },
    {
      icon: "/produtos/pote-supreme-500.png",
      title: "Delícia Supreme",
      text: "A Delícia Supreme é a margarina amanteigada feita com creme de leite.",
      slug: "delicia-supreme",
    },
    {
      icon: "/produtos/pote-ervas-500.png",
      title: "Delícia Toque de Chef com Ervas Aromáticas",
      text: "A margarina Delícia Toque de Chef com Ervas Aromáticas é feita com pedacinhos de ervas, de verdade, acredita?",
      slug: "delicia-toque-de-chef-com-ervas-aromaticas",
    },
    {
      icon: "/produtos/pote-alho-500.png",
      title: "Delícia Toque de Chef com Alho e Cebola",
      text: "A margarina Delícia Toque de Chef com Alho e Cebola é feita com pedacinhos de alho e cebola e, de verdade, sabia?",
      slug: "delicia-toque-de-chef-com-alho-e-cebola",
    },
  ];

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <h2 className={styles.title}>
            A CREMOOOOSA DE VERDADE
            <div className={styles.divider}></div>
          </h2>

          <p className={styles.description}>
            Todas podem ser cremosas, mas só Delícia é cremoooosa DE VERDADE.
            Somos a única margarina com creme de leite do mercado, que além de
            ter uma textura ultra-mega-blaster cremosa, é mais fácil de espalhar
            e muito mais indulgente para você.
          </p>
        </div>

        <div className={styles.productsGrid}>
          {cards.map((card, index) => (
            <Link
              href={`/produtos/${card.slug}`}
              key={index}
              className={styles.cardLink}
            >
              <div className={styles.productCard}>
                
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.icon}
                    alt={`Produto ${card.title}`}
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

      </div>
    </section>
  );
};
