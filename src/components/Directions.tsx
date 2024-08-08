import { directions } from "../constants";
import { styles } from "../styles";

const Directions = () => {
    return (
       <ul className={`${styles.sectionSubText} ${styles.paddingY} flex flex-col gap-5 p-5 h-full bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40`}>
        {
            directions.map((direction, index) => (
                <li 
                    key={index}
                    className="flex items-center gap-4"
                >
                    <direction.icon className="text-xl"/>
                    <p>{direction.statement}</p>
                </li>
            ))
        }
       </ul>
    )
};

export default Directions;