"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

export const CareersContent = ({ vagas }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.careersSection}>
      <h1 className={styles.title}>LOREM IPSUM</h1>

      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl ac
        nulla maximus tincidunt in ac turpis. In malesuada blandit massa, quis
        vestibulum erat rhoncus ac.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/lorem-image.jpg"
            alt="Lorem ipsum dolor sit amet"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.vagasTitle}>Lorem ipsum dolor sit amet:</h2>

          {vagas.length === 0 ? (
            <p className={styles.noVagas}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          ) : (
            vagas.map((vaga, index) => {
              const responsabilidades = vaga.responsabilidades
                ? vaga.responsabilidades.split("\n")
                : [];

              const qualificacoes = vaga.qualificacoes
                ? vaga.qualificacoes.split("\n")
                : [];

              return (
                <div key={index} className={styles.vagaBox}>
                  <button
                    className={styles.vagaHeader}
                    onClick={() => toggleAccordion(index)}
                  >
                    Lorem ipsum dolor sit amet
                    <span className={styles.icon}>
                      {activeIndex === index ? "▲" : "▼"}
                    </span>
                  </button>

                  {activeIndex === index && (
                    <div className={styles.vagaContent}>
                      <div className={styles.vagaSection}>
                        <h3>LOREM IPSUM</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec dictum interdum ligula.
                        </p>
                      </div>

                      <div className={styles.vagaSection}>
                        <h3>LOREM IPSUM</h3>
                        <ul>
                          {responsabilidades.map((item, i) => (
                            <li key={i}>Lorem ipsum dolor sit amet</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.vagaSection}>
                        <h3>LOREM IPSUM</h3>
                        <ul>
                          {qualificacoes.map((item, i) => (
                            <li key={i}>Lorem ipsum dolor sit amet</li>
                          ))}
                        </ul>
                      </div>

                      <button className={styles.ctaButton}>
                        LOREM IPSUM
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
