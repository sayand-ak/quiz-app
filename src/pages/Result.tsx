import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { persistor, RootState } from '../store/store'; // Adjust the import path to your store file
import { performanceCategories } from '../constants'; // Adjust the import path to your constants file
import { Navbar } from '../components';
import { useNavigate } from 'react-router-dom';
import { resetScore } from '../features/quizSlice';

const Result: React.FC = () => {
    // Retrieve the score from Redux store
    const score = useSelector((state: RootState) => state.quiz.score);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Determine the performance category based on the score
    const getPerformanceCategory = (percentage: number) => {
        return Object.values(performanceCategories).find(category => 
            percentage >= category.range[0] && percentage < category.range[1]
        );
    };

    // Get the performance category based on the score
    const performance = getPerformanceCategory(score);

     // Handle button click actions
     const handleBackClick = () => {
        // Clear local storage
        localStorage.clear();

        // Reset Redux persist
        persistor.purge();

        // Navigate to the previous page
        navigate("/");
    };

    const handleRetryClick = () => {
        // Reset the score to 0
        dispatch(resetScore());

        // Set new times with 5 seconds greater
        const now = new Date();
        const endTime = new Date(now.getTime() + 5000);
        localStorage.setItem("startedTime", now.toISOString());
        localStorage.setItem("endTime", endTime.toISOString());

        navigate("/quiz");

    };

    return (
        <div className="bg-black-100 min-h-screen ">
            <Navbar />
            <div className='min-h-[90vh] w-full flex items-center'>
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                    {performance ? (
                        <div className="flex flex-col items-center">
                            <div className="w-full mb-4">
                            <iframe 
                                src={performance.image} 
                                title={performance.description} 
                                className="w-full h-64 rounded-lg border-none"  
                                loading="lazy"
                            ></iframe>
                            </div>
                            <h2 className="text-2xl font-bold text-tertiary text-center mb-2">
                                {performance.description}
                            </h2>
                            <p className="text-gray-600 text-center">
                                Your score: {score}
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                No result available
                            </h2>
                            <p className="text-gray-600 text-center">
                                Your score: {score}%
                            </p>
                        </div>
                    )}
                <div className='text-white flex justify-between mt-4 mx-5'>
                    <button 
                        className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg shadow-md transition-colors duration-300'
                        onClick={handleBackClick}
                    >
                        Back
                    </button>
                    <button 
                        className='bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg shadow-md transition-colors duration-300'
                        onClick={handleRetryClick}
                    >
                        Retry
                    </button>
                </div>

                </div>
            </div>
        </div>
    );
};

export default Result;
