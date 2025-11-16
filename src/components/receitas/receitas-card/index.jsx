import Image from "next/image";
import styles from "./styles.module.css";

export const ReceitasCard = ({ nome, endereco, imagem }) => {
  const imageUrl = imagem || "/imagem-filial.png";

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl} alt={nome} fill className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.nome}>{nome}</h3>

        <hr className={styles.divisor} />
      </div>
    </div>
  );
};
