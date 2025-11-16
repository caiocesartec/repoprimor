import Image from "next/image";
import styles from "./styles.module.css";

export const AboutContent = () => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.title}>Lorem ipsum</h1>

      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
        sollicitudin mauris. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Integer vel quam sit amet
        turpis congue efficitur.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/sobre_background.pngn"
            alt="Lorem ipsum dolor sit amet"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            urna quis elit facilisis vulputate. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nunc nec
            magna id ante convallis placerat non sed erat.
          </p>

          <p>
            <strong>Lorem ipsum dolor sit amet</strong> consectetur adipiscing
            elit. Nulla dignissim, mi id dictum suscipit, lorem urna lobortis
            diam, sit amet venenatis ipsum sapien in nibh. Mauris feugiat
            bibendum dui, at cursus tortor feugiat vitae.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            aliquam sagittis lacus, sit amet commodo turpis pulvinar nec. In
            hac habitasse platea dictumst. Integer feugiat sem et lectus
            suscipit tristique.
          </p>

          <p>
            <strong>Lorem ipsum dolor sit amet</strong> consectetur adipiscing
            elit. Vestibulum tincidunt felis vitae tellus varius, a sodales
            turpis mattis. Donec id sapien et odio tincidunt sagittis id id
            lectus.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vulputate leo metus, vitae condimentum turpis viverra eu. Aliquam
            erat volutpat. Praesent sed porttitor ligula, vitae pharetra velit.
          </p>
        </div>
      </div>
    </section>
  );
};
