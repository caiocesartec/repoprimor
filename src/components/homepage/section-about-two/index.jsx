import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionAboutTwo = () => {
  return (
    <section className={styles.sectionAboutTwo}>
      <div className={styles.contentWrapper}>
        
      
        <div className={styles.textContent}>
          <span className={styles.tag}>
            Dá um quentinho no coração.
            <div className={styles.divider}></div>
          </span>

          <p className={styles.description}>
          Um elo de conexão entre mim e a minha história, Primor é a marca que sempre esteve presente na casa da família e 
          das pessoas mais próximas de mim. Ela me dá uma nostalgia gostosa e aquece o meu coração saber que carrego comigo as tradições de quem eu amo, mesmo que de um jeito novo
          </p>

          <Link href="/sobre">
            <button className={styles.button}>CONHEÇA NOSSA HISTÓRIA</button>
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas_2.jpg"
            alt="imagem reservada"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>

      </div>
    </section>
  );
};
