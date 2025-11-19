import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { getDicas } from "@/lib/dicas";
import { SectionDicas } from "../section-dicas";
import { Wave } from "@/components/common/waves";

const dicas = await getDicas();

export const SectionEquipe = () => {
  return (
    <section className={styles.container}>
      <Wave direction="down" />
      <div className={styles.trabalheConosco}>
        <div className={styles.text}>
          <h3 className={styles.tag}>Dá um quentinho no coração.</h3>
          <p className={styles.textDescription}>
            Um elo de conexão entre mim e a minha história, Primor é a marca que
            sempre esteve presente na casa da família e das pessoas mais
            próximas de mim. Ela me dá uma nostalgia gostosa e aquece o meu
            coração saber que carrego comigo as tradições de quem eu amo, mesmo
            que de um jeito novo
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas_2.jpg"
            alt="Delícia - equipe"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>
      </div>

      <SectionDicas dicas={dicas} />
    </section>
  );
};
