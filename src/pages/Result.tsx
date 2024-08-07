import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // Adjust the import path to your store file
import { performanceCategories } from '../constants'; // Adjust the import path to your constants file

const Result: React.FC = () => {
    // Retrieve the score from Redux store
    const score = useSelector((state: RootState) => state.quiz.score);

    // Determine the performance category based on the score
    const getPerformanceCategory = (percentage: number) => {
        return Object.values(performanceCategories).find(category => 
            percentage >= category.range[0] && percentage < category.range[1]
        );
    };

    // Get the performance category based on the score
    const performance = getPerformanceCategory(score);

    return (
        <div className="bg-black-100 min-h-screen flex items-center justify-center">
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
                            Your score: {score}%
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
            </div>
        </div>
    );
};

export default Result;
