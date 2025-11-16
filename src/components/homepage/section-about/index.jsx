import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/colegas_analisando_grafico.jpgg"
            alt="imagem reservada"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <span className={styles.tag}>
            LOREM IPSUM
            <div className={styles.divider}></div>
          </span>

          <h2 className={styles.aboutTitle}>
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING
          </h2>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Lorem Ipsum Dolor</strong> sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>

          <Link href="/sobre">
            <button className={styles.button}>LOREM IPSUM</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
