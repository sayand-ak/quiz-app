import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuizState } from '../types/reduxTypes';

// Define the initial state
const initialState: QuizState = {
    score: 0,
};

// Create the quiz slice
const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        incrementScore: (state, action: PayloadAction<number>) => {
            state.score += action.payload;
        },
        resetScore: (state) => {
            state.score = 0;
        },
    },
});

// Export actions and reducer
export const { incrementScore, resetScore } = quizSlice.actions;
export { quizSlice };
