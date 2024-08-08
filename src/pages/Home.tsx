import { useState } from "react";
import { Directions, Header } from "../components";
import { FaPowerOff } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [showAnimation, setShowAnimation] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setShowAnimation(true);
        // Set a timeout to navigate after the animation is complete
        setTimeout(() => {
            navigate("/profile");
        }, 1500); // Duration of the animation in milliseconds
    };

    return (
        <div className="w-full h-screen bg-black-100 flex items-center justify-center">
            <div className="w-full md:w-[50%] h-full md:h-fit flex flex-col items-center gap-10 md:gap-8 bg-[#0000004e] pb-5 md:rounded-3xl">
                <Header />

                <Directions />

                <div className="bg-[#0001] rounded-full mt-12 md:mt-0">
                    <div className="relative flex items-center justify-center bg-white w-fit rounded-full p-20 md:p-12 shadow-button">
                        <motion.a
                            href="/profile"
                            whileHover={{ scale: 1.2 }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleButtonClick();
                            }}
                            className="start-button"
                        >
                            <FaPowerOff className="text-[50px]" />
                        </motion.a>
                        <p className="absolute bottom-8 md:bottom-5 text-secondary text-lg md:text-sm">Tap to start</p>
                    </div>
                </div>

                {/* 3D Animation Div */}
                {showAnimation && (
                    <motion.div
                        initial={{ opacity: 0, rotateY: 0 }}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 1.5 }, 
                            exit: { duration: 0.5 } 
                        }}
                        className="fixed inset-0 bg-black flex items-center justify-center z-50"
                    >
                        <div className="relative size-52 violet-gradient rounded-full flex items-center justify-center">
                            <div className="absolute inset-0 bg-white opacity-20 rounded-full"></div>
                            <div className="absolute inset-0 border-4 border-white rounded-full animate-pulse"></div>
                            <p className="text-white text-xl font-bold">Welcome</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Home;
