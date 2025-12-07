import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionReceitas = () => {
  return (
    <section className={styles.receitasSection}>
      <Image
        src="/banners/Banner_Cozinhando.jpg"
        alt="Fundo receitas"
        fill
        className={styles.backgroundImage}
        quality={100}
        priority
      />

      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.tag}>
            <h2 className={styles.title}>Nossas receitas</h2>
          </span>

          <p className={styles.paragrafoTitulo}>
            Não importa qual a receita: se for feita com Primor, dá certo.
            Ela tem a combinação perfeita entre textura e sabor que dá confiança
            para fazer qualquer receita: das mais tradicionais às que recebem
            um toque especial. Além disso, é a escolha certa para cozinhar
            para a família ou para o negócio, sempre com a mesma qualidade de sempre.
          </p>

          <Link
            href="https://www.seara.com.br/marcas/primor/"
            target="_blank"
          >
            <button className={styles.button}>
              Conheça nossas receitas
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
