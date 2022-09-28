import React from 'react'

export default function UserTable({ users, generalRateHeaders }) {
    return (
        <div className='max-h-96 overflow-y-scroll'>
            <table className='w-full'>
                <thead>
                    <tr>
                        {generalRateHeaders ?
                            generalRateHeaders.map((header, i) => (
                                <th key={i} className="align-middle text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold
                                    bg-gray-200 text-gray-500 border-gray-100">
                                    {header.header}
                                </th>
                            ))
                            :
                            (
                                <th className="align-middle text-center border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold
                            bg-gray-200 text-gray-500 border-gray-100">S No</th>

                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {users ?
                        users.map((users, i) => (
                            <tr key={i} className={`${i % 2 == 0 ? "bg-gray-50" : "bg-gray-100"} hover:bg-black hover:text-white`}>
                                <td className='px-4 max-w-min text-center'>{i + 1}</td>
                                <td className='px-4 max-w-min  border-x-2'>{users.cname}</td>
                                <td className='px-4 max-w-min '>{users.fname} {users.lname}</td>
                                <td className='px-4 max-w-min border-x-2'>{users.email} <br />{users.mobile}</td>
                                <td className='px-4 max-w-min text-center border-x-2'>{users.type}</td>
                                <td className='px-4 max-w-min text-center'>
                                    <select className="form-select form-select-sm appearance-none w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                        <option selected hidden>{users.status}</option>
                                        <option className={`${users.status == "pending" || users.status == "suspended" ? "" : "hidden"}`} value="approved">approve</option>
                                        <option className={`${users.status == "suspended" || users.status == "pending" ? "hidden" : ""}`} value="suspended">suspend</option>
                                        <option className={`${users.status == "pending" ? "" : "hidden"}`} value="reject">reject</option>

                                    </select>
                                </td>
                                <td className='px-4 max-w-min text-center border-x-2'><i className="fa-solid fa-arrows-rotate cursor-pointer hover:text-emerald-300"></i></td>
                            </tr>
                        ))
                        :
                        <div></div>

                    }
                </tbody>
            </table>
        </div>
    )
}
