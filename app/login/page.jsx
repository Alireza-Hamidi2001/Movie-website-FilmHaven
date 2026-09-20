"use client";

import { useState } from "react";
import loginImage from "@/public/hero-mobile.png";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="w-[93vw] sm:w-[50vw] md:w-[80vw] lg:max-w-[80vw] xl:max-w-[50vw] min-h-[50vh] md:min-h-[55vh] lg:h-[75vh] mx-auto relative top-[50%] translate-y-[-50%] lg:border border-night-700/10 dark:border-cream-50/5 rounded-lg lg:overflow-hidden lg:shadow-lg shadow-night-700/4 dark:shadow-cream-50/4">
            <div className="relative w-full h-full flex">
                {/* === پنل تصویر (سمت چپ در لاگین) === */}
                <div
                    className={`relative hidden lg:block lg:w-1/2 h-full transition-transform duration-700 ease-in-out ${
                        isLogin ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    {/* <div className="absolute z-10 top-0 left-0 w-full h-full dark:bg-linear-to-r dark:from-blue-800/5 dark:to-blue-500/5 bg-black/60"></div> */}
                    <Image
                        fill
                        src={loginImage}
                        alt="auth image"
                        className="object-cover"
                    />
                </div>

                {/* === پنل فرم‌ها (سمت راست در لاگین) === */}
                <div
                    className={`relative w-1/1 lg:w-1/2 h-full transition-transform duration-700 ease-in-out ${
                        isLogin ? "translate-x-0" : "lg:-translate-x-full"
                    }`}
                >
                    {/* فرم لاگین */}
                    <div
                        className={`absolute inset-0 grid grid-cols-1 p-2 md:p-5 lg:p-8 transition-opacity duration-700 ${
                            isLogin
                                ? "opacity-100 delay-200 z-10"
                                : "opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                        <div>
                            <h1 className="text-red-500 dark:text-cream-50 text-[1.8rem] lg:text-[2.8rem] font-semibold">
                                Welcome
                            </h1>
                            <h2 className="max-h-fit text-night-700/70 dark:text-cream-50/50 text-[0.7rem] lg:text-[1rem] my-4">
                                For better experience login first. You can
                                manage your profile, add favourite movie and
                                more.
                            </h2>
                        </div>
                        <form className="grid grid-cols-1 gap-1 lg:gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="border h-fit border-night-700/20 dark:border-cream-50/20 px-2 py-1 lg:px-3 lg:py-2 rounded-sm lg:rounded-lg text-night-700 dark:text-cream-50 placeholder:text-night-700/40 dark:placeholder:text-cream-50/20 focus:outline-night-700/50 dark:focus:outline-cream-50/50 transition-all duration-300 text-[0.8rem] lg:text-[1rem]"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border h-fit border-night-700/20 dark:border-cream-50/20 px-2 py-1 lg:px-3 lg:py-2 rounded-sm lg:rounded-lg text-night-700 dark:text-cream-50 placeholder:text-night-700/40 dark:placeholder:text-cream-50/20 focus:outline-night-700/50 dark:focus:outline-cream-50/50 transition-all duration-300 text-[0.8rem] lg:text-[1rem]"
                            />
                            <button className="bg-red-500 h-fit dark:bg-red-500 hover:-translate-y-0.5 cursor-pointer text-cream-50 px-2 py-1 lg:px-3 lg:py-2 rounded-sm lg:rounded-lg transition-all duration-300 text-[0.8rem] lg:text-[1rem]">
                                Login
                            </button>
                            <p className="text-night-700 dark:text-cream-50 text-[0.7rem] lg:text-[1rem]">
                                Don&apos;t have an account yet?{" "}
                                <button
                                    type="button"
                                    onClick={() => setIsLogin(false)}
                                    className="text-red-500 cursor-pointer"
                                >
                                    Sign up
                                </button>
                            </p>
                            <Link
                                href=""
                                className="flex gap-1 items-center w-fit mx-auto text-night-700 dark:text-cream-50 bg-cream-300 dark:bg-night-800 mt-4 px-2 py-1 rounded-sm text-[0.6rem] lg:text-[1rem]"
                            >
                                <FcGoogle className="w-5 h-5" /> Login with
                                Google
                            </Link>
                        </form>
                    </div>

                    {/* فرم ثبت‌نام */}
                    <div
                        className={`absolute inset-0 grid grid-cols-1 p-2 md:p-5 lg:p-8 transition-opacity duration-700 ${
                            !isLogin
                                ? "opacity-100 delay-200 z-10"
                                : "opacity-0 z-0 pointer-events-none"
                        }`}
                    >
                        <div>
                            <h1 className="text-red-500 dark:text-cream-50 text-[1.8rem] lg:text-[2.8rem] font-semibold">
                                Sign up
                            </h1>
                            <h2 className="text-night-700/70 dark:text-cream-50/50 text-[0.7rem] lg:text-[1rem] my-4">
                                Create your account and start managing your
                                profile and favourite movies.
                            </h2>
                        </div>
                        <form className="grid grid-cols-1 gap-2">
                            <input
                                type="text"
                                placeholder="Full name"
                                className="border h-fit border-night-700/20 dark:border-cream-50/20 px-2 py-1 lg:px-3 lg:py-2 rounded-sm lg:rounded-lg text-night-700 dark:text-cream-50 placeholder:text-night-700/40 dark:placeholder:text-cream-50/20 focus:outline-night-700/50 dark:focus:outline-cream-50/50 transition-all duration-300 text-[0.8rem] lg:text-[1rem]"
                            />
                            <input
                                type="text"
                                placeholder="Email address"
                                className="border h-fit border-night-700/20 dark:border-cream-50/20 px-2 py-1 lg:px-3 lg:py-2 rounded-sm lg:rounded-lg text-night-700 dark:text-cream-50 placeholder:text-night-700/40 dark:placeholder:text-cream-50/20 focus:outline-night-700/50 dark:focus:outline-cream-50/50 transition-all duration-300 text-[0.8rem] lg:text-[1rem]"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="border h-fit border-night-700/20 dark:border-cream-50/20 px-2 py-1 lg:px-3 lg:py-2 rounded-sm lg:rounded-lg text-night-700 dark:text-cream-50 placeholder:text-night-700/40 dark:placeholder:text-cream-50/20 focus:outline-night-700/50 dark:focus:outline-cream-50/50 transition-all duration-300 text-[0.8rem] lg:text-[1rem]"
                            />
                            <button className="bg-red-500 h-fit dark:bg-red-500 hover:-translate-y-0.5 cursor-pointer text-cream-50 px-2 py-1 lg:px-3 lg:py-2 rounded-sm lg:rounded-lg transition-all duration-300 text-[0.8rem] lg:text-[1rem]">
                                Sign Up
                            </button>
                            <p className="text-night-700 dark:text-cream-50 text-[0.7rem] lg:text-[1rem]">
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => setIsLogin(true)}
                                    className="text-red-500 cursor-pointer"
                                >
                                    Login
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
