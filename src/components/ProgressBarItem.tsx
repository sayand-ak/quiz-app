import ProgressBar from "@ramonak/react-progress-bar";
import { questions } from "../constants";

interface ProgressBarItemProps {
    curIndex: number;
}

const ProgressBarItem:React.FC<ProgressBarItemProps> = ({curIndex}) => {

    const completed = (100 / questions.length)
    console.log(curIndex, "----------");
    
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center min-h-[5vh] mx-auto">
        <div className="w-[94%]">
            <ProgressBar
                completed={100 / (questions.length - (curIndex + 1))}
                height="9px"
                width="100%"
                labelSize="0"
                bgColor="#FA93BE"
                baseBgColor="#0000005c"
                className="rounded-full" 
            />
        </div>
    </div>
  );
};

export default ProgressBarItem;
