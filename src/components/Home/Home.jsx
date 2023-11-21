import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-1 pb-10 pt-10 sm:py-5 mx-auto sm:px-5 lg:px-5">
                    <div className="max-w-xl sm:mt-5 mt-10 sm:space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-2xl sm:text-4xl font-bold">
                            Welcome
                            <span className="block sm:hidden text-2xl">To the Blog</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="relative inset-0 w-full sm:my-10 sm:pt-1 pt-12 h-full ">
                    <img className="w-full sm:w-96 h-auto" src="https://velocityglobal.com/sites/default/files/migrate_images/header-remote-work-stats.f22353d9.svg" alt="image1" />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-10">
                <img className="w-full sm:w-96 h-auto" src="https://media.licdn.com/dms/image/C5612AQEnMQYBMflt6g/article-cover_image-shrink_600_2000/0/1617020286618?e=2147483647&v=beta&t=ORHg1qlbhbSZQ5iSKJmDXYWB8PwtNZzW21kQIHjc_aY" alt="image2" />
            </div>

            <h1 className="text-center text-lg sm:text-5xl py-5 font-medium">Hello There</h1>
        </div>
    );
}
