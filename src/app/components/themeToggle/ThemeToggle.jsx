import style from './themeToggle.module.css';

const ThemeToggle = () => {
    return (
        <div className={style.container}>ThemeToggle</div>
        <Image src="/moon.png" alt = "moon" width={14} height={14}/>
        <Image src="/sun.png" alt = "sun" width={14} height={14}/>
    )
};

export default ThemeToggle;