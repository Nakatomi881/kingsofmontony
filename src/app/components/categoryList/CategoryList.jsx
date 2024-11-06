import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.qa}`}
        >
          <Image
            src="/Quality.webp"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          QA
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.testing}`}>
          <Image
            src="/Testing.webp"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Testing
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.coding}`}>
          <Image
            src="/Coding.webp"
            alt=""
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
