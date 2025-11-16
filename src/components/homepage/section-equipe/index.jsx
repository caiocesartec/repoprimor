import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionEquipe = () => {
  return (
    <section className={styles.equipeSection}>
      <div className={styles.quemFaz}>
        <span className={styles.tag}>
          LOREM IPSUM
          <div className={styles.divider}></div>
        </span>

        <h2 className={styles.title}>LOREM IPSUM DOLOR SIT AMET</h2>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet,{" "}
          <strong>consectetur adipiscing elit</strong>. Nulla facilisi. Mauris
          tempus arcu ut{" "}
          <strong>odio vulputate, quis cursus massa maximus</strong> — sed
          condimentum elit ex non urna.
        </p>

        <Link href="/profissionais">
          <button className={styles.button}>LOREM IPSUM</button>
        </Link>
      </div>

      <div className={styles.trabalheConosco}>
        <div className={styles.text}>
          <span className={styles.tag}>
            LOREM IPSUM
            <div className={styles.divider}></div>
          </span>

          <h3 className={styles.subtitle}>LOREM IPSUM DOLOR SIT</h3>

          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl
            ac nulla maximus tincidunt. Integer gravida leo non lorem congue,
            vitae dapibus velit mattis. Suspendisse potenti.
          </p>

          <Link href="/trabalhe-conosco">
            <button className={styles.button}>LOREM IPSUM</button>
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="null undefined NaN"
            alt="Lorem ipsum dolor sit amet"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};
