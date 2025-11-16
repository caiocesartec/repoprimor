import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionEquipe = () => {
  return (
    <section className={styles.equipeSection}>
      <div className={styles.quemFaz}>
        <h2 className={styles.tag}>
          VIEMOS PARA TRANSFORMAR MOMENTOS, RELAÇÕES E O ASTRAL.
          <div className={styles.divider}></div>
        </h2>

 

        <p className={styles.description}>
          Nosso apetite insaciável por uma vida deliciosa transforma cada preparo
          em uma experiência que vale a pena saborear. Acreditamos que a vida
          merece ser uma Delícia e é por isso que pensamos fora da caixa e
          levamos leveza, criatividade e bom humor para tudo que fazemos.
        </p>

        {/* <Link href="/profissionais">
          <button className={styles.button}>CONHEÇA QUEM FAZ</button>
        </Link> */}
      </div>

      <div className={styles.trabalheConosco}>
        <div className={styles.text}>
          <h3 className={styles.tag}>
            GENTE ABERTA A CURTIR O QUE EXISTE DE MELHOR.
            <div className={styles.divider}></div>
          </h3>

    
          <p className={styles.textDescription}>
            Falamos com pessoas que têm um apetite insaciável por delícias e um 
            gosto pela vida que inspira. Aqui, convidamos todos a fazer parte dessa 
            onda deliciosa afinal, não há nada tão bom que não possa virar uma Delícia.
          </p>

          {/* <Link href="/trabalhe-conosco">
            <button className={styles.button}>TRABALHE CONOSCO</button>
          </Link> */}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas_2.png"
            alt="Delícia - equipe"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
