import React from "react";
import styles from "./singlePage.module.css";
import Menu from "../components/menu/Menu";
import Image from "next/image";
import Comments from "../components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Coding journey</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/codingPost.webp"
                alt="coding"
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userInfo}>
              <span className={styles.username}>Ryan Palmer</span>
              <span className={styles.date}>11.16.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/codingPost2.webp"
            alt="coding"
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Learning how to code is an empowering journey that opens up
              endless opportunities in today’s digital world. It starts with
              understanding the basics—how computers interpret commands, the
              logic behind problem-solving, and using programming languages like
              Python, JavaScript, or others. Initially, coding might feel like
              learning a new language, with syntax and structure that seem
              unfamiliar. However, with consistent practice and determination,
              the pieces start coming together. Projects, challenges, and
              debugging sessions become stepping stones to growth. Learning to
              code fosters creativity, critical thinking, and resilience, and
              ultimately leads you to build everything from small scripts to
              powerful applications that solve real-world problems. It’s a
              process of constant learning, but it’s also deeply rewarding as
              each step brings you closer to being able to create and shape
              technology
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
