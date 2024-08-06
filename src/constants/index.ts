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