import React from 'react'
import styles from './singlePage.module.css'
import Menu from '../components/menu/Menu'
import Image from 'next/image'
import Likedislike from '../components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Coding journey</h1>
            <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <Image src="/codingPost.webp" alt="coding" fill className={styles.avatar}/>
                </div>
                <div className={styles.userTextContainer}>
                <span className={styles.username}>Ryan Palmer</span>
                <span className={styles.date}>11.16.2024</span>
                </div>
            </div>
        </div>
        <div className={styles.imageContainer}>
        <Image src="/codingPost2.webp" alt="coding" fill className={styles.image}/>
        </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                <p>
                    I have been learning coding for the past six years.
                    Long journey and a challenging for sure 
                </p>
                <p>
                    I have been learning coding for the past six years.
                    Long journey and a challenging for sure 
                </p>
                <p>
                    I have been learning coding for the past six years.
                    Long journey and a challenging for sure 
                </p>
                </div>
                <div className={styles.comment}>
                    <Comments/>
                </div>
            </div>
            <Menu />
        </div>
    </div>
  );
};

export default SinglePage
