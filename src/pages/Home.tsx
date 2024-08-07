import { Directions, Header } from "../components";
import { FaPowerOff } from "react-icons/fa6";
import { motion } from "framer-motion";


const Home = () => { 
    return (
        <div className="min-h-screen w-full flex flex-col items-center gap-10 md:gap-6 bg-black-100">
            <Header />
            <Directions />

            <div className="bg-[#0001] rounded-full mt-12 md:mt-0">
                <div className="relative flex items-center justify-center bg-white w-fit rounded-full p-20 md:p-12 shadow-button">
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    className="start-button"
                >
                    <FaPowerOff className="text-[50px]" />
                </motion.a>
                    <p className="absolute bottom-8 md:bottom-5 text-secondary text-lg md:text-sm">Tap to start</p>
                </div>
            </div>
        </div>
    )
};

export default Home