import { Navbar, ProgressBarItem, Questions } from "../components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../store/store';

const Quiz = () => {
    const [curIndex, setCurIndex] = useState(0); 
    const score = useSelector((state: RootState) => state.quiz.score);

    return (
        <div className="min-h-[100vh] bg-black-100 flex flex-col">

            <Navbar />

            <ProgressBarItem curIndex={curIndex}/>

            <div className="w-full flex justify-center items-center font-bold">
                <p>Score : {score}</p>
            </div>

            <Questions curIndex={curIndex} setCurIndex={setCurIndex} />

            
                
       </div>
    );
};

export default Quiz;