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
        score: 20
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        score: 20
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
        answer: "William Shakespeare",
        score: 20
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
        score: 20
    },
];


export const performanceCategories = {
    failed: {
        range: [0, 25],
        image: "https://lottie.host/embed/993d0726-9db0-43de-a3e6-8780c6bb6cc8/4FSVfE1Cjb.json",
        description: "Sorry, you need to work on you knowledge"
    },
    passed: {
        range: [25, 50],
        image: "https://lottie.host/embed/73ea500f-3ee5-41c8-9725-f7a949dd6ffb/zny76VAjkw.json",
        description: "Congrats, you passed the quiz"
    },
    good: {
        range: [50, 75],
        image: "https://lottie.host/embed/b27bf4c4-b578-41e2-b2fd-51179b49bcd6/oAh7wFCoxQ.json",
        description: "Congrats, you did good"
    },
    excellent: {
        range: [75, 100],
        image: 'https://lottie.host/embed/804f7c35-3db9-4279-af50-82a9e01ac3fb/pBAgMAAdGa.json',
        description: "Congrats, you did excellent"
    }
};



