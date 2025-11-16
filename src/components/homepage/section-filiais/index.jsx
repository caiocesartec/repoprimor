import Image from "next/image";
import styles from "./styles.module.css";
import { FilialCard } from "@/components/filiais/filiais-card";
import { CustomSwiper } from "@/components/common/swiper";

export const SectionFiliais = async ({ filiais }) => {
  const hasFiliais = filiais && filiais.length > 0;

  const subtitleContent = hasFiliais ? (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br />
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </>
  ) : (
    <>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>
  );

  const slides = hasFiliais
    ? filiais.map((filial) => (
        <FilialCard
          key={filial.nome}
          nome={filial.nome}
          endereco={filial.endereco}
          imagem={filial.imagem?.url || "/imagem-filial.png"}
        />
      ))
    : null;

  return (
    <section className={styles.filiaisSection}>
      <Image
        src="/home_filiais_background.png"
        alt="Lorem ipsum dolor sit amet"
        fill
        className={styles.backgroundImage}
        quality={100}
        priority
      />

      <div className={styles.overlay}>
        <div className={styles.content}>
          {/* HEADER */}
          <span className={styles.tag}>
            LOREM IPSUM
            <div className={styles.divider}></div>
          </span>

          <h2 className={styles.title}>LOREM IPSUM DOLOR SIT AMET</h2>

          <p className={styles.subtitle}>{subtitleContent}</p>

          {hasFiliais && (
            <div className={styles.carouselWrapper}>
              <CustomSwiper
                slides={slides}
                pagination
                autoplay={true}
                autoplayDelay={3500}
                spaceBetween={24}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className={styles.filiaisSwiper}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
