import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../features/userSlice';
import { avatar1, avatar2, dataCollectImg } from '../assets';

interface FormValues {
    username: string;
    gender: string;
    avatar: string;
}

const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [status, setStatus] = useState<string | null>(null);

    const onSubmit = (data: FormValues) => {
        // Set the avatar based on the gender
        data.avatar = data.gender === 'male' ? avatar1 : avatar2;

        // Dispatch action to update Redux store
        dispatch(setUserData(data));

        // Set start time in local storage
        const startTime = new Date();
        localStorage.setItem('startedTime', startTime.toISOString());

        // Set submission status and navigate after delay
        setStatus('Submitting...');
        setTimeout(() => {
            setStatus('Submitted! Redirecting...');

            // Set end time in local storage
            const endTime = new Date(startTime.getTime() + 7 * 1000);
            localStorage.setItem('endTime', endTime.toISOString());

            setTimeout(() => {
                navigate('/quiz'); 
            }, 1000); 
        }, 1000); 
    };

    // Determine the status message and its styles
    const getStatusStyles = () => {
        if (status === 'Submitting...') {
            return 'bg-yellow-500'; 
        }
        if (status === 'Submitted! Redirecting...') {
            return 'bg-green-500'; 
        }
        return 'bg-transparent'; 
    };

    

    return (
        <div className="min-h-[100vh] bg-black-100 flex md:items-center justify-center">
            <div className='w-full md:w-1/2 p-10 md:rounded-2xl bg-[#e7e7e7f6]'>
                <h1 className="text-2xl font-bold mb-4 text-tertiary text-center">Tell something about you!</h1>
                <div className='h-72 flex items-center justify-center'>
                    <img src={dataCollectImg} className='object-cover h-full' alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-black-200">
                            Username
                        </label>
                        <input
                            id="username"
                            {...register('username', { 
                                required: 'Username is required',
                                minLength: {
                                    value: 3,
                                    message: 'Username must be at least 3 characters'
                                }
                            })}
                            className="mt-1 pl-4 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-gray-4 focus:border-gray-400 sm:text-sm outline-none bg-white text-black h-10"
                        />
                        {errors.username && (
                            <p className="mt-2 text-sm text-red-600 ">{errors.username.message}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-black-200">
                            Gender
                        </label>
                        <select
                            id="gender"
                            {...register('gender', { 
                                required: 'Gender is required'
                            })}
                            className="mt-1 pl-4 block w-full border border-gray-400 rounded-md shadow-sm focus:ring-gray-4 focus:border-gray-400 sm:text-sm outline-none bg-white text-black h-10"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        {errors.gender && (
                            <p className="mt-2 text-sm text-red-600">{errors.gender.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Save
                    </button>
                </form>
                {status && (
                    <div className={`h-10 mt-4 rounded-lg flex items-center justify-center text-white ${getStatusStyles()}`}>
                        {status}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
