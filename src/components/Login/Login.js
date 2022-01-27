import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import ErrorModal from './ErrorModal/ErrorModal';
import SuccessModal from './SuccessModal/SuccessModal';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useNavigate()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
            {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-gray-50">
            <body class="h-full">
            ```
          */}
            <div className="min-h-full bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://i.ibb.co/fpHvWdG/logo.png"
                            alt="JTour logo"
                        />
                        {isLoading && <button type="button" class="bg-indigo-500" disabled>
                            <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            </svg>
                            Processing...
                        </button>}
                        {user?.email && <SuccessModal />}
                        {authError && <ErrorModal />}
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <p className="text-blue-800 font-bold">New User? Please <Link className="no-underline text-indigo-500" to="/register">Register </Link></p>
                        </p>
                    </div>
                    <form onSubmit={handleLoginSubmit} className="mt-8 space-y-6" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onBlur={handleOnChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    onBlur={handleOnChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <p>
                                    <Link className="font-medium text-indigo-600 hover:text-indigo-500" to="/forgot" />
                                    Forgot your password?
                                </p>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Login in
                            </button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <h2 className='text-gray-400'>Or Continue with</h2>
                        <button className="bg-pink-500 hover:bg-pink-600 mt-4 px-3 py-2 rounded text-wrap" onClick={handleGoogleSignIn}><i className="fab fa-google text-gray-300"></i> Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;