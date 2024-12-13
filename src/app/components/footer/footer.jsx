import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
            <Image src="/kofm.webp" alt="k of M blog" width={50} height={50}/>
            <h1 className={styles.logoText}>K of M blog</h1>
        </div>
        <p className={styles.desc}>
            description for footer 
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href="/">Blog</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
        </div>
        <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href="/">QA</Link>
            <Link href="/">Coding</Link>
            <Link href="/">Testing</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
