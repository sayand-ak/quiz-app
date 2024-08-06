import { appCaption, appHeading } from "../constants";
import { styles } from "../styles";


const Header = () => {

    return (
        <header className="pt-20 flex items-center justify-center flex-col gap-2 text-center">
            <h1 className={styles.heroHeadText}>{appHeading}</h1>
            <p className={`${styles.heroSubText} ${styles.paddingX}`}>{appCaption}</p>
        </header>
    )
};

export default Header;