import styles from "./styles.module.css";
import { FilialCard } from "../filiais-card";

export const FiliaisContent = async ({ filiais }) => {
  return (
    <section className={styles.filiaisSection}>
      <h1 className={styles.title}>LOREM IPSUM</h1>

      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className={styles.cardsGrid}>
        {filiais.length === 0 ? (
          <p className={styles.noFiliais}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        ) : (
          filiais.map((filial) => (
            <FilialCard
              key={filial.nome}
              nome="Lorem ipsum dolor"
              endereco="Lorem ipsum dolor sit amet"
              imagem={filial.imagem?.url}
            />
          ))
        )}
      </div>
    </section>
  );
};
