import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Adjust the import path as necessary
import { styles } from "../styles";
import { TiArrowSortedUp } from "react-icons/ti";


const Navbar = () => {
    // Use useSelector to get user data from Redux
    const user = useSelector((state: RootState) => state.user);

    return (
        <div className={`${styles.paddingX} min-h-[10vh] flex items-center justify-between`}>
            <a href="/" className="hover:bg-[#0000004d] rounded-full p-2">
                <IoMdArrowBack className="text-[30px] md:text-[25px] hover:scale-110" />
            </a>

            {/* Display user avatar and tooltip */}
            <div className="relative ml-4 cursor-pointer group">

                {user.avatar && (
                    <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                    />
                )}
                {/* Tooltip */}
                <div className="w-fit absolute top-14 mb-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <TiArrowSortedUp className="absolute -top-3 left-8 text-[20px] text-gray-700"/>
                    <p className="text-nowrap">
                        {user.username}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
