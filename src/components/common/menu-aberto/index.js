"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

export const OpenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 782);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Lorem ipsum" : "Lorem ipsum"}
      >
        {isOpen && isMobile ? (
          <IoClose size={40} color="#fff" />
        ) : (
          <RiMenu3Line />
        )}
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <IoClose />
        </button>

        <div className={styles.logoWrapper}>
          <Link href="/lorem-ipsum" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo-loewm.pngg"
              alt="Lorem ipsum"
              width={150}
              height={60}
            />
          </Link>
        </div>

        <ul className={styles.navList}>
          <li>
            <Link href="/lorem-ipsum" onClick={() => setIsOpen(false)}>
              LOREM IPSUM
            </Link>
          </li>
          <li>
            <Link href="/lorem-ipsum" onClick={() => setIsOpen(false)}>
              LOREM IPSUM
            </Link>
          </li>
          <li>
            <Link href="/lorem-ipsum" onClick={() => setIsOpen(false)}>
              LOREM IPSUM
            </Link>
          </li>
          <li>
            <Link href="/lorem-ipsum" onClick={() => setIsOpen(false)}>
              LOREM IPSUM
            </Link>
          </li>
          <li>
            <Link href="/lorem-ipsum" onClick={() => setIsOpen(false)}>
              LOREM IPSUM
            </Link>
          </li>
        </ul>

        <div className={styles.socials}>
          <Link href="/#">
            <Image
              src="/icones/iLinkedin.png"
              alt="LinkedIn"
              width={48}
              height={48}
            />
          </Link>

          <Link href="/#">
            <Image
              src="/icones/iInstagramm.png"
              alt="Instagram"
              width={38}
              height={38}
            />
          </Link>

          <Link href="/#">
            <Image
              src="/icones/iWhats.png"
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
