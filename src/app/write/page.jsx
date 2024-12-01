import styles from './writePage.module.css'

const WritePage = () => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' />
      <div className={styles.editor}>
        <button className={styles.button} id='plusButton'></button>
      </div>
    </div>
  )
}

export default WritePage;