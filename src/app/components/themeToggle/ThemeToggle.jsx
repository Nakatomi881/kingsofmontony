import style from './themeToggle.module.css';
import Image from 'next/image';

const ThemeToggle = () => {
    return 
        <div className={style.container}>
            <Image src="/moon.png" alt = "moon" width={14} height={14}/>
            <Image src="/sun.png" alt = "sun" width={14} height={14}/>
        </div>;
    
};

export default ThemeToggle;