import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
           <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Compostion vs Inheritance
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ryan Palmer</span>
              <span className={styles.date}> - 11.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
           <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.qa}`}>
              QA
            </span>
            <h3 className={styles.postTitle}>
              Writing Test Plans
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ryan Palmer</span>
              <span className={styles.date}> - 11.06.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
           <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.testing}`}>
              Testing
            </span>
            <h3 className={styles.postTitle}>
              Testing best Practices
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ryan Palmer</span>
              <span className={styles.date}> - 11.06.2024</span>
            </div>
          </div>
        </Link>
      </div>
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/coding.webp"
              alt="coding"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Compostion vs Inheritance
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ryan Palmer</span>
              <span className={styles.date}> - 11.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/coding.webp"
              alt="coding"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.qa}`}>
              QA
            </span>
            <h3 className={styles.postTitle}>
              Writing Test Plans
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ryan Palmer</span>
              <span className={styles.date}> - 11.06.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/coding.webp"
              alt="coding"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.testing}`}>
              Testing
            </span>
            <h3 className={styles.postTitle}>
              Testing best Practices
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Ryan Palmer</span>
              <span className={styles.date}> - 11.06.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
