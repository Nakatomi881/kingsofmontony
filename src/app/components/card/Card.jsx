import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";


const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/playwright.webp" alt="playwright" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.2.2024 - </span>
                    <span className={styles.category}>TESTING</span>
            </div>
            <Link href="/">
                <h1>Testing with Playwright</h1>
            </Link>
            <p className="{styles.desc}">
                I am creating this blog as an R&D site to learn more on testing, best QA practices
                and improve my coding skills.  
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card;