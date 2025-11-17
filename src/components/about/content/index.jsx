import Image from "next/image";
import styles from "./styles.module.css";

export const AboutContent = () => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.heroPhrase}>
        Primor é o sabor que <span> Conta Histórias</span> no Norte e no
        Nordeste
      </h1>

      <p className={styles.subtitle}>Nosso sabor chama para perto</p>

      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <p>
            Onde tem família reunida, tem muito{" "}
            <strong>amor e Primor envolvidos</strong>. São mais de 60 anos
            levando qualidade e sabor, do café da manhã ao jantar.
          </p>

          <p>
            E quando as mesas e cozinhas se preparam para a festa, a Primor
            também está lá.{" "}
            <strong>Celebrando culturas, valorizando tradições</strong>, sendo o
            sabor que conta das receitas que, mais que ingredientes, carregam a
            identidade de um povo.
          </p>
        </div>
      </div>

      <div className={styles.finalImageWrapper}>
        <Image
          src="/banners/Banner_Sobre.png"
          alt="Banner da Marca Delícia"
          fill
          className={styles.finalImage}
          quality={100}
        />
      </div>
    </section>
  );
};
