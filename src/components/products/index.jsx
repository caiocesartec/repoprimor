"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

export const ProductsContent = ({ produto }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordions = [
    { titulo: "Sobre o produto", conteudo: produto.sobre },
    { titulo: "Ingredientes", conteudo: produto.ingredientes },
    { titulo: "Informações nutricionais", conteudo: produto.nutricional },
  ];

  return (
    <section className={styles.careersSection}>
      <h1 className={styles.title}>{produto.nome}</h1>

      <p className={styles.subtitle}>{produto.descricao}</p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={produto.imagem}
            alt={produto.nome}
            fill
            className={styles.image}
            quality={100}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.vagasTitle}>Informações do produto</h2>

          {accordions.map((item, index) => (
            <div key={index} className={styles.vagaBox}>
              <button
                className={styles.vagaHeader}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {item.titulo}
                <span className={styles.icon}>
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {activeIndex === index && (
                <div className={styles.vagaContent}>
                  <div className={styles.vagaSection}>
                    <div className={styles.nutriContent}>
                      <pre className={styles.preBlock}>{item.conteudo}</pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
