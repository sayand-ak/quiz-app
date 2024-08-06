import { Directions, Header } from "../components";
import { FaPowerOff } from "react-icons/fa6";



const Home = () => { 
    return (
        <div className="min-h-[100vh] w-full violet-gradient flex flex-col items-center gap-10">
            <Header />
            <Directions />

            <div className="relative flex items-center justify-center bg-white w-fit rounded-full p-28 mt-12 shadow-button">
                <button className="start-button">
                    <FaPowerOff className="text-[50px]"/>
                </button>
                <p className="absolute bottom-14 text-secondary">Tap to start</p>
            </div>
        </div>
    )
};

export default Home