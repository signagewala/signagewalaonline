import React from 'react'
import Navbar from '../elements/Navbar'
import Sidebar from '../elements/Sidebar'

export default function User({ children }) {
    const design = {
        "bgcolor": "bg-slate-900",
        "textcol": "text-white",
        "logo": "/whitelogo.png",
        "logosize": { "width": 399, "height": 136 },
        "content": [
            { "menu": "Login" },
            { "menu": "Register" },
        ]
    }

    return (
        <>
            <div className='flex flex-grow-0'>
                <div className="w-auto min-h-screen bg-gray-400">
                    <Sidebar />
                </div>
                <div className="flex flex-col">
                    <div>
                        <Navbar
                            design={design} />
                    </div>

                    <div className='px-4 mt-4'>{children}</div>
                </div>
            </div>
        </>

    )
}
