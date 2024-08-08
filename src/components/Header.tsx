import { appCaption, appHeading } from "../constants";
import { styles } from "../styles";


const Header = () => {

    return (
        <header className="pt-3 md:pt-3 flex items-center justify-center flex-col text-center">
            <h1 className={`${styles.heroHeadText}`}>{appHeading}</h1>
            <p className={`${styles.heroSubText} ${styles.paddingX} `}>{appCaption}</p>
        </header>
    )
};

export default Header;