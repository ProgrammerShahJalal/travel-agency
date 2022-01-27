import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ErrorModal from '../ErrorModal/ErrorModal';
import SuccessModal from '../SuccessModal/SuccessModal';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useNavigate();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="min-h-full bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://i.ibb.co/fpHvWdG/logo.png"
                    alt="JTour logo"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register Form</h2>
                {
                    !isLoading && <form onSubmit={handleLoginSubmit}>
                        <input className="mb-4 py-2 pl-2 border-solid rounded"
                            style={{ width: '100%' }}
                            label="Your Name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            onBlur={handleOnBlur}
                            required
                        />
                        <br />
                        <input
                            className='py-2 pl-2 border-solid rounded'
                            style={{ width: '100%' }}
                            label="Your Email"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            onBlur={handleOnBlur}
                            required
                        />
                        <br />
                        <input className="mt-4 py-2 pl-2 border-solid rounded"
                            style={{ width: '100%' }}
                            label="Your Password"
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            onBlur={handleOnBlur} />
                        <br />

                        <input className="mt-4 py-2 pl-2 border-solid rounded"
                            style={{ width: '100%' }}
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            placeholder="Re-type Password"
                            onBlur={handleOnBlur} />
                        <br />
                        <button className="bg-blue-800 py-2 px-4 my-5 rounded text-white" type="submit">Register</button>


                        <p className="text-blue-800 font-bold">Already have a account? Please <Link className="underline-none text-pink-500" to="/login">login</Link></p>

                    </form>}
                {isLoading && <button type="button" class="bg-indigo-500" disabled>
                    <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    </svg>
                    Processing...
                </button>}
                {user?.email && <SuccessModal />}
                {authError && <ErrorModal />}
            </div>
        </div>
    );
};

export default Register;