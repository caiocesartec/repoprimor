import Image from "next/image";
import styles from "./styles.module.css";

export const AboutContent = () => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.title}>Delícia</h1>

      <p className={styles.subtitle}>
        Delícia é a única margarina feita com creme de leite e chegou para virar o jogo. 
        Acreditamos que a vida merece ser uma Delícia e estamos aqui para transformar 
        qualquer hora do dia em um momento delicioso.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/banners/Banner_Mochilinha.png"
            alt="Delícia"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <p>
            Quando todo mundo falava que margarina é tudo igual a gente foi lá e UOU. 
            Delícia é a única margarina com creme de leite. Quando todas falavam que 
            eram cremosas a gente foi lá e PÁ. Delícia é a única cremoooosa de verdade 
            porque tem o creme de leite que faz toda a diferença.
          </p>

          <p>
            Enquanto as margarinas estavam se limitando ao pão do café da manhã a gente 
            foi lá e disse EI. Delícia com creme de leite é pra qualquer hora do dia. 
            E enquanto a cozinha foi ficando com menos sabor e mais sem graça a gente 
            foi lá e disse NÃO. Delícia com creme de leite tá aqui pra virar esse jogo.
          </p>

          <p>
            A cada novo preparo nos perguntamos por que não pode ser delicioso. Estamos 
            aqui para que a vida vire uma Delícia. Viemos para transformar os momentos 
            as relações e o astral. Nosso apetite insaciável por uma vida deliciosa 
            transforma cada receita em uma experiência que vale a pena saborear.
          </p>

          <p>
            Nosso amor declarado por comida gostosa faz com que a vida tenha oooooutro 
            sabor. Nos deliciamos com boas risadas com café da manhã na hora do almoço 
            com as culinárias daqui e do mundo e com ideias fora da caixa porque a 
            Delícia da vida é estar aberto pra curtir o que existe de melhor.
          </p>

          <p>
            Afinal não há nada que esteja tão bom que não possa virar uma Delícia. 
            Delícia a Delícia que a vida pede.
          </p>
        </div>
      </div>
    </section>
  );
};
