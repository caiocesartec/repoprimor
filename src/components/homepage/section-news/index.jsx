import styles from "./styles.module.css";

export const SectionNews = async ({ novidades }) => {

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <div className={styles.left}>

          <h2 className={styles.title}>A CREMOOOOSA DE VERDADE
          <div className={styles.divider}></div>

          </h2>

          <p className={styles.description}>
            Todas podem ser cremosas, mas só Delícia é cremoooosa DE VERDADE.
            Somos a única margarina com creme de leite do mercado, que além de
            ter uma textura ultra-mega-blaster cremosa, é mais fácil de espalhar
            e muito mais indulgente para você.
          </p>
        </div>
      </div>
    </section>
  );
};
