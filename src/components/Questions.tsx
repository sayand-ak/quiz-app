import React, { useCallback, useEffect, useState } from "react";
import { questions } from "../constants";
import { styles } from "../styles";
import { QuestionItem, Timer } from "../components"
import { useDispatch } from "react-redux";
import { incrementScore } from "../features/quizSlice";
import { useNavigate } from "react-router-dom";

interface QuestionsProps {
    curIndex: number;
    setCurIndex: (index: number) => void;
}

const Questions: React.FC<QuestionsProps> = ({ curIndex, setCurIndex }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [submittedState, setSubmittedState] = useState<{ [key: number]: boolean }>({});
    const [showNextButton, setShowNextButton] = useState(false); 
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleRadioChange = (option: string) => {
        if (!submittedState[curIndex]) {
            setSelectedOption(option);
        } else {
            alert("You have already submitted the answer for this question");
        }
    };

    const handleNextClick = useCallback(() => {

        if (selectedOption === questions[curIndex].answer) {
            dispatch(incrementScore(questions[curIndex].score)); // Add 10 points if the answer is correct
        }

        // Show the result for 5 seconds before moving to the next question
        setSubmittedState(prev => ({ ...prev, [curIndex]: true }));
    
        setLoading(true)
        // Delay the transition to the next question
        setTimeout(() => {
            setLoading(false)
            if (curIndex < questions.length - 1) {
                setCurIndex(curIndex + 1);
                // Set new times for the next question
                setQuestionTimes();
            } else {
                navigate("/result")
            }
        }, 5000); // Delay for 5 seconds

    }, [curIndex, dispatch, selectedOption, setCurIndex, navigate]);


    const setQuestionTimes = () => {
        const now = new Date();
        const endTime = new Date(now.getTime() + 5000); 
        localStorage.setItem("startedTime", now.toISOString());
        localStorage.setItem("endTime", endTime.toISOString());
    };

    useEffect(() => {

        const endTime = localStorage.getItem("endTime");
        if (endTime) {
            const endDate = new Date(endTime);
            const now = new Date();

            // Check if current time is greater than end time
            if (now > endDate) {
                setShowNextButton(true);
                setSubmittedState(prev => ({ ...prev, [curIndex]: true }));
            } else {
                setShowNextButton(false);
            }
        }

    }, [curIndex]);

    return (
        <div className={`${styles.sectionSubText} ${styles.paddingY} flex flex-col gap-5 mx-auto mt-5 p-5 w-[95%] md:w-[45%] h-full bg-gray-700 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40`}>
            <div key={curIndex} className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-2">
                    <h3 className="py-2">
                        Question 0{curIndex + 1} / 0{questions.length}
                    </h3>
                    <Timer />
                </div>

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
                {(selectedOption != null || showNextButton) && (
                    <button
                        className={`py-4 w-full bg-secondary text-[20px] rounded-xl mt-5 hover:shadow-card`}
                        onClick={handleNextClick}
                    >
                        {!loading ? "Next" : "Loading..."}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Questions;
