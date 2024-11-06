import React from "react";
import styles from "./featured.module.css"
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Discover my story!</b> with testing and coding.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/thrown.webp" alt="thrown" fill className={styles.Image}/>
                    
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>My journey as a developer with an emphasis on quality</h1>
                    <p className={styles.postDesc}>
                        I will be using this site for R&D and my learning on how to be a more effective testing engineer
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
            
        </div>
    )
}

export default Featured