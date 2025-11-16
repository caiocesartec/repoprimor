import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import Link from "next/link";

const cards = [
  {
    icon: "/icones/iPrevidenciario.pngg",
    title: "LOREM IPSUM DOLOR SIT AMET",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras tincidunt, turpis vel mattis viverra, orci odio efficitur lorem, nec hendrerit est massa nec justo.",
  },
  {
    icon: "/icones/iTrabalhista.pngg",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id nibh a urna viverra ultricies vel eget arcu.",
  },
  {
    icon: "/icones/iSindical.pngg",
    title: "LOREM IPSUM DOLOR",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend, lorem id commodo molestie, mi orci vehicula justo, a finibus velit nisl ac justo.",
  },
  {
    icon: "/icones/iAdministrativo.pngg",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac lorem ut urna porttitor dapibus. Sed sed tincidunt velit.",
  },
  {
    icon: "/icones/iCivel.pngg",
    title: "LOREM IPSUM",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium, libero non consequat feugiat, ipsum nulla dictum urna, vitae imperdiet metus tortor ut arcu.",
  },
];

export const SectionPracticeAreas = () => {
  const renderedCards = cards.map((card, index) => (
    <div className={styles.card} key={index}>
      <Image
        src={card.icon}
        alt={`ícone ${card.title}`}
        width={82}
        height={82}
        className={styles.icon}
      />
      <div className={styles.textWrapper}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardText}>{card.text}</p>
      </div>
    </div>
  ));

  return (
    <section className={styles.sectionPractice}>
      <div className={styles.contentWrapper}>
        <span className={styles.tag}>
          LOREM IPSUM
          <div className={styles.divider}></div>
        </span>

        <h2 className={styles.title}>LOREM IPSUM DOLOR SIT AMET</h2>

        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. 
          Nullam cursus, lorem nec tincidunt mollis, arcu turpis bibendum quam, 
          vitae fermentum odio lorem id nunc.
        </p>

        <CustomSwiper
          slides={renderedCards}
          slidesPerView={1}
          spaceBetween={20}
          pagination
          mobileOnly
          fallbackClass={styles.grid}
          autoplay={true}
          className={styles.practiceSwiper}
        />

        <Link href="/areas-de-atuacao">
          <button className={styles.button}>LOREM IPSUM</button>
        </Link>
      </div>
    </section>
  );
};
