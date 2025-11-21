import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";

export const SectionTwoTop = () => {
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
