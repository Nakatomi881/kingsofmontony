import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css';

export const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
        Coding
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.qa}`}>
        QA
        </Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.testing}`}>
        Testing
        </Link>
      </div>
  )
}
