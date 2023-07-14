import React from "react";

const Education = () => {
    return (
        <div
            name="about"
            className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white sm:my-6"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">
                        Education
                    </p>
                </div>

                <ol class="relative border-l border-gray-200 dark:border-gray-700">
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            February 2022
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Application UI code in Tailwind CSS
                        </h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Get access to over 20+ pages including a dashboard
                            layout, charts, kanban board, calendar, and
                            pre-order E-commerce & Marketing pages.
                        </p>
                      
                    </li>
                    <li class="mb-10 ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            March 2022
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Marketing UI design in Figma
                        </h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            All of the pages and components are first designed
                            in Figma and we keep a parity between the two
                            versions even as we update the project.
                        </p>
                    </li>
                    <li class="ml-4">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            April 2022
                        </time>
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            E-Commerce UI code in Tailwind CSS
                        </h3>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                            Get started with dozens of web components and
                            interactive elements built on top of Tailwind CSS.
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Education;
