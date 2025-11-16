import { CustomSwiper } from "@/components/common/swiper";
import styles from "./styles.module.css";
import Link from "next/link";
import { Header } from "@/components/common/header";

const branches = [
  {
    image: "/banners/banner_principal.png",
    title: "",
    location: "",
  },
  {
    image: "/banners/banner_principal.png",
    title: "",
    location: "",
  },
  {
    image: "/banners/banner_principal.png",
    title: "",
    location: "",
  },
  {
    image: "/banners/banner_principal.png",
    title: "",
    location: "",
  },
];

export const SectionBanner = () => {
  const slides = branches.map((branch, index) => (
    <section
      key={index}
      className={styles.banner}
      style={{
        backgroundImage: `url(${branch.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {branch.title}
          <br />
          {branch.location}
        </h1>
        {/* <p className={styles.subtitle}>SOLUÇÕES JURÍDICAS PERSONALIZADAS</p> */}
        {/* <Link
          href="https://wa.me/554896490073"
          target="_blank"
          className={styles.button}
        >
          AGENDE UMA CONSULTA
          <img
            src="/icones/iWhats.png"
            alt="WhatsApp"
            className={styles.icon}
          />
        </Link> */}
      </div>
    </section>
  ));

  return (
    <>
    <Header variant="absolute" />
    <div className={styles.section_one}>
      <CustomSwiper slides={slides} loop pagination autoplay={true} />
    </div>
    </>
  );
};
