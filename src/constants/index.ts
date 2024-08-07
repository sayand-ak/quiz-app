import { MdFormatListNumbered } from "react-icons/md";
import { CgOptions } from "react-icons/cg";
import { TbQuotes } from "react-icons/tb";
import { PiTimer } from "react-icons/pi";
import { GrScorecard } from "react-icons/gr";




//application name
export const appHeading = "It's quiz time!";

//application caption
export const appCaption = "Test your knowledge and challenge your mind with our engaging and interactive quizzes!";

//directions to be noted
export const directions = [
    {
        icon: MdFormatListNumbered,
        statement: "Quiz consists of 4 questions",
    },
    {
        icon: CgOptions,
        statement: "Each question has 4 options",
    },
    {
        icon: TbQuotes,
        statement: "Only one option is correct",
    },
    {
        icon: PiTimer,
        statement: "You have 5 seconds to answer each question",
    },
    {
        icon: GrScorecard,
        statement: "Your score will be displayed at the end",
    },
];

export const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
        answer: "William Shakespeare",
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
    },
];

export const timer = 5000;


