import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import { DicasCard } from "./components/dicas-card";
import { SectionTitle } from "@/components/common/section-title";

export const SectionDicas = async ({ dicas }) => {
  const hasDicas = dicas && dicas.length > 0;

  const subtitleContent = hasDicas ? (
    <>
      Primor é a vizinha sem cerimônia e a figura familiar carinhosa que está
      sempre de braços abertos para o que der e vier. Confira nossas dicas.
    </>
  ) : (
    <>No momento não temos dicas cadastradas.</>
  );

  const slides = hasDicas
    ? dicas.map((dica, index) => (
        <DicasCard
          key={index}
          titulo={dica.titulo}
          detalhesDaDica={dica.detalhesDaDica}
          imagem={dica.imagem || "/imagem-dica.png"}
          href={dica.href}
        />
      ))
    : null;

  return (
    <>
      <section className={styles.dicasSection}>
        <div className={styles.content}>
          <SectionTitle color="#facd0a"> Nossas dicas</SectionTitle>

          <p className={styles.subtitle}>{subtitleContent}</p>

          {hasDicas && (
            <div className={styles.carouselWrapper}>
              <CustomSwiper
                slides={slides}
                loop
                navigation
                pagination={false}
                autoplay={false}
                spaceBetween={24}
                breakpoints={{
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
                className={styles.dicasSwiper}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
