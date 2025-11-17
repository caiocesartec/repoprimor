import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas.jpg"
            alt="imagem reservada"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>

        <div className={styles.textContent}>
          <span className={styles.tag}>
            Representa os Nordestes.
            <div className={styles.divider}></div>
          </span>

          <p className={styles.description}>
            Primor tem orgulho de ser nordestina e não mede esforços para
            entender e atender as particularidades de cada pedacinho do
            Nordeste. Ela impulsiona pra frente o Nordeste que eu quero e
            dissemina a cultura para muito além dos esteriótipos. Eu me sinto
            representada de verdade pela marca.
          </p>

          <Link href="/sobre">
            <button className={styles.button}>CONHEÇA NOSSA HISTÓRIA</button>
          </Link>
        </div>

      </div>
    </section>
  );
};
