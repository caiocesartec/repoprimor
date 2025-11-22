import { getProdutos } from "@/lib/produtos";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const SectionThreeProductShow = async () => {
  const produtos = await getProdutos();

  return (
    <section className={styles.SectionThreeProductShow}>
      <div className={styles.containerFull}>
        
        <div className={styles.productsGrid}>
          {produtos.map((p) => (
            <Link
              className={styles.productCardLink}
              href={`/produtos/${p.slug}`}
              key={p.slug}
            >
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={p.imagem}
                    alt={p.nome}
                    fill
                    className={styles.productImage}
                  />
                </div>

                <h3 className={styles.productTitle}>{p.nome}</h3>
                <p className={styles.productText}>{p.descricao}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
