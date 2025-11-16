import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";

export const SectionNews = async ({ novidades }) => {
  const slides = novidades.map((news, index) => (
    <div key={index} className={styles.newsSlide}>
      <div className={styles.imageWrapper}>
        <Image
          src="/lorem-image.png"
          alt="Lorem ipsum dolor sit amet"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>Lorem ipsum dolor sit amet</h3>
        <p className={styles.newsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat
          est sed cursus commodo. Pellentesque habitant morbi tristique.
        </p>
      </div>
    </div>
  ));

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tag}>LOREM IPSUM</span>
          <div className={styles.divider}></div>

          <h2 className={styles.title}>LOREM IPSUM DOLOR SIT AMET.</h2>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim lacus vitae mi dictum, quis consequat metus lacinia.
            Integer id orci vehicula, blandit justo vitae, commodo risus.
          </p>
        </div>

        <div className={styles.right}>
          <CustomSwiper
            slides={slides}
            pagination={true}
            autoplay={false}
            autoplayDelay={8000}
            className={styles.newsSwiper}
          />
        </div>
      </div>
    </section>
  );
};
