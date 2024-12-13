import styles from './loginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} id='googleSocialButton'>Sign in with Google</div>
            <div className={styles.socialButton} id='githubSocialButton'>Sign in with Github</div>
        
        </div>
    </div>
  )
}

export default LoginPage;