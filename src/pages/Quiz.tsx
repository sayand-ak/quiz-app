import { IoMdArrowBack } from "react-icons/io";
import { styles } from "../styles";
import { ProgressBarItem, Questions } from "../components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../store/store';

const Quiz = () => {
    const [curIndex, setCurIndex] = useState(0); 
    const score = useSelector((state: RootState) => state.quiz.score);

    return (
        <div className="min-h-[100vh] bg-black-100 flex flex-col">

            <div className={`${styles.paddingX} min-h-[10vh] flex items-center`}>
                <a href="/" className=" hover:bg-[#0000004d] rounded-full p-2">
                    <IoMdArrowBack className="text-[35px] md:text-[30px] hover:scale-110"/>
                </a>
            </div>

            <ProgressBarItem curIndex={curIndex}/>

            <div className="w-full flex justify-center items-center font-bold">
                <p>Score : {score}</p>
            </div>

            <Questions curIndex={curIndex} setCurIndex={setCurIndex} />

            
                
       </div>
    );
};

export default Quiz;