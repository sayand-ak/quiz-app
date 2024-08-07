import React from "react";
import { styles } from "../styles";
import { FaCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

interface QuestionItemProps {
    question: {
        question: string;
        options: Array<string>;
        answer: string;
    };
    option: string;
    index: number;
    idx: number;
    submitted: boolean;
    selectedOption: string | null;
    setSelectedOption: (option: string) => void;
    handleRadioChange: (option: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, option, index, idx, submitted, selectedOption, handleRadioChange }) => {
    return (
        <li
            key={idx}
            className={`${styles.paddingX} py-3 border rounded-lg flex justify-between items-center
                ${submitted && option === question.answer ? 'border-successPrimary bg-successSecondary' : ''}
                ${submitted && selectedOption === option && option !== question.answer ? 'border-errorPrimary bg-errorSecondary' : ''}
                ${!submitted && selectedOption === option ? 'border-[#41a9ff]' : 'border'}`}
            onClick={() => !submitted && handleRadioChange(option)}
        >
            <p>{option}</p>
            <div className='radio-input'>
                <input
                    type="radio"
                    id={`${idx}`}
                    name={`question-${index}`}
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleRadioChange(option)}
                    className="opacity-0"
                />
                
                {submitted && option === question.answer && (
                    <FaCheck className="text-[#4BB39B] text-[20px]" />
                )}
                {submitted && selectedOption === option && option !== question.answer && (
                    <IoMdClose className="text-[#cf6952] text-[20px]" />
                )}
            </div>
        </li>
    );
};

export default QuestionItem;
