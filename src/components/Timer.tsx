import { useEffect, useState } from "react";
import { PiTimerLight } from "react-icons/pi";
import Countdown, { CountdownRendererFn } from 'react-countdown';


const Timer = () => {
    const [endTime, setEndTime] = useState<number | null>(null);

    useEffect(() => {
        // Retrieve end time from local storage and convert it to a timestamp
        const endTimeStr = localStorage.getItem("endTime");
        if (endTimeStr) {
            const endTimeDate = new Date(endTimeStr);
            setEndTime(endTimeDate.getTime());
        }
    }, []);

    // Custom renderer function for Countdown
    const renderer: CountdownRendererFn = ({ seconds, completed }) => {
        if (completed) {
            return <span>00 s</span>;
        } else {
            return <span>{seconds < 10 ? `0${seconds}` : seconds} s</span>;
        }
    };

    return (
        <div className="flex gap-2 items-center">
            <PiTimerLight className="text-primary text-xl" />
            {endTime && (
                <Countdown
                    date={endTime} // Use the end time from local storage
                    renderer={renderer}
                />
            )}
        </div>
    );
};

export default Timer;
