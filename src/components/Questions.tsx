import React, { useState } from "react";
import { questions } from "../constants";
import { styles } from "../styles";
import QuestionItem from "./QuestionItem";

interface QuestionsProps{
    curIndex: number;
    setCurIndex: (index: number) => void;
}

const Questions: React.FC<QuestionsProps> = ({curIndex, setCurIndex}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [submittedState, setSubmittedState] = useState<{ [key: number]: boolean }>({});


    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!submittedState[curIndex]) {
            setSelectedOption(event.target.value);
        } else {
            alert("You have already submitted the answer for this question");
        }
    };

    const handleNextClick = (answer: string) => {
        setSubmittedState(prev => ({ ...prev, [curIndex]: true }));
        
        // Move to next question if available
        if (curIndex < questions.length - 1) {
            setTimeout(() => {
                setCurIndex(curIndex + 1);
            }, 5000)
        } else {
            alert("You've completed all questions!");
        }

        if (answer === selectedOption) {
            alert(selectedOption);
        } else {
            alert(selectedOption);
        }
    };

    return (
        <div className={`${styles.sectionSubText} ${styles.paddingY} flex flex-col gap-5 mx-auto mt-10 p-5 w-[95%] md:w-[45%] h-full bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40`}>
            {
                
                <div key={curIndex} className="flex flex-col gap-4">
                    <h3 className="py-2">
                        Question 0{curIndex + 1} / 0{questions.length}
                    </h3>
                    <div className="w-full bg-white text-[#000000ca] p-4 pb-8 rounded-xl">
                        <p className={`${styles.sectionHeadText} py-4`}>{questions[curIndex].question}</p>
                        <ul className="flex flex-col gap-5">
                            {
                                questions[curIndex].options.map((option, idx) => (
                                    <QuestionItem 
                                        key={idx}
                                        question={questions[curIndex]}
                                        option={option}
                                        index={curIndex}
                                        idx={idx}
                                        submitted={submittedState[curIndex] || false}
                                        selectedOption={selectedOption}
                                        setSelectedOption={setSelectedOption}
                                        handleRadioChange={handleRadioChange}
                                    />


                                ))
                            
                            }
                        </ul>
                    </div>
                    <button
                        className={`py-4 w-full bg-secondary text-[20px] rounded-xl mt-5 hover:shadow-card`}
                        onClick={() => handleNextClick(questions[curIndex].answer)}
                        disabled={submittedState[curIndex]}
                    >
                        Next
                    </button>
                </div>
            }
        </div>
    )
};

export default Questions;
