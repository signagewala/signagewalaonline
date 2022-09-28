import React from "react";

export default function AddNewUserForm({ handleAddElement }) {
    return (
        <div className="justify-center flex border-0">
            <div
                className="absolute bg-black bg-opacity-10 w-full h-screen"
                onClick={handleAddElement}
            ></div>
            <div className="absolute w-10/12 bg-gray-50 border-2 rounded-b-2xl text-center p-10">
                <form>
                    {/* Mobile input */}
                    <div className="w-full mb-6">
                        <input
                            type="text"
                            className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Company Name"
                        />
                    </div>
                    <div className="flex gap-2">
                        {/* First Name input */}
                        <div className="w-6/12 mb-6">
                            <input
                                type="text"
                                className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="First Name"
                            />
                        </div>
                        {/* First Name input */}
                        <div className="w-6/12 mb-6">
                            <input
                                type="text"
                                className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {/* Email input */}
                        <div className="w-6/12 mb-6">
                            <input
                                type="text"
                                className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Email"
                            />
                        </div>
                        {/* Mobile input */}
                        <div className="w-6/12 mb-6">
                            <input
                                type="text"
                                className="w-full form-control block px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Mobile Number"
                            />
                        </div>
                    </div>


                    {/* Submit button */}
                    <button
                        type="button"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Send Invitation to Register
                    </button>
                </form>
            </div>
        </div>
    );
}
