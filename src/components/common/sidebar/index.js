import Image from "next/image";
import styles from "./styles.module.css";
import { OpenMenu } from "../menu-aberto";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.hamburguer_menu}>
        <OpenMenu />
      </div>

      <div className={styles.spacer} />

      <div className={styles.socialIcons}>
        <Link target="_blank" href="https://www.facebook.com/PrimorAlimentos/">
          <Image
            src="/logos/ico-face.png"
            alt="Icone Facebook"
            width={20}
            height={33}
            style={{marginRight: 0}}
            quality={100}
          />
        </Link>
        
        <Link target="_blank" href="https://www.youtube.com/@PrimorAlimentos">
          <Image
            src="/logos/ico-you.png"
            alt="Icone Youtube"
            width={38}
            height={34}
            quality={100}
          />
        </Link>
    
        <Link target="_blank" href="https://www.instagram.com/primor/">
          <Image
            src="/logos/ico-insta.png"
            alt="Icone Instagram"
            width={38}
            height={38}
            quality={100}
          />
        </Link>
      
    
   
    </div>
    </aside>
  );
}
