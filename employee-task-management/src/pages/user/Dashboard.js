import React from "react";
import { CalendarIcon, LinkIcon } from '@heroicons/react/20/solid'
import Atas from '../layout/Navbar'


export default function UserDashboard() {
    return (
        <>
            <Atas />
            <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-left text-xl font-bold tracking-tight text-gray-900">Neta's Task</h1>
                </div>
            </header>
            <main>

                <div className="text-start mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <h2 className=" text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                Do Excercise
                            </h2>
                            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    Closing on January 9, 2020
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                            <span className="ml-3 hidden sm:block">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                    View
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="text-start mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <h2 className=" text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                Do Assignment
                            </h2>
                            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    Closing on January 9, 2020
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                            <span className="ml-3 hidden sm:block">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                    View
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="text-start mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <h2 className=" text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                Do Homework
                            </h2>
                            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    Closing on January 9, 2020
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                            <span className="ml-3 hidden sm:block">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                    View
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <hr></hr>

                <div className="text-start mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1">
                            <h2 className=" text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                Do Workout
                            </h2>
                            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                                <div className="mt-2 flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                    Closing on January 9, 2020
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex lg:mt-0 lg:ml-4">
                            <span className="ml-3 hidden sm:block">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <LinkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                                    View
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </main>
        </>
    )
}
