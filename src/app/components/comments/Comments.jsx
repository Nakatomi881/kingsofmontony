import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input} id="commentTextarea"
          ></textarea>

          <button className={styles.button} id="button">Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/thrown.webp"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Ryan Palmer</span>
              <span className={styles.date}>11.28.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem, impsu dolor sit amet consectetur adisicing Lorem, impsu dolor
            sit amet consectetur adisicing Lorem, impsu dolor sit amet
            consectetur adisicing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
