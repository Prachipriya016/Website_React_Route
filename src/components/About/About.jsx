import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://reactrouter.com/_brand/react-router-stacked-color-inverted.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React Router is a standard library for routing in React applications. 
                        </h2>
                        <p className="mt-6 text-gray-600">It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL.</p>
                        <p className="mt-6 text-gray-600">
                            Declarative Routing: React Router allows you to describe how your UI should react to a change in the URL by using a declarative syntax.!
                        </p>
                        <p className="mt-4 text-gray-600">
                        Nested Routing: You can nest routes within each other, enabling complex UI structures with different components rendering at different levels of your application.
                        </p>
                        <p className="mt-4 text-gray-600"> Dynamic Routing: React Router supports dynamic route matching, where certain parts of the route can be treated as parameters.</p>
                        <p className="mt-6 text-gray-600">Route Matching: You can define rules for how the routes should match and which components should be rendered based on the current URL.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}