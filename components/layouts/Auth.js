import React from 'react'
import Navbar from '../elements/Navbar'
import Sidebar from '../elements/Sidebar'

export default function Auth({ children }) {
    const design = {
        "bgcolor": "bg-slate-900",
        "textcol": "text-white",
        "logo": "/colorlogo.png",
        "logosize": { "width": 399, "height": 136 },
        "content": [
            { "menu": "Login" },
            { "menu": "Register" },
        ]
    }

    return (
        <>
            <div className='flex flex-col'>

                <div className='fixed w-full'>
                    <Navbar
                        design={design} />
                </div>

                <div className='px-4 mt-16'>{children}</div>
            </div>

        </>

    )
}
