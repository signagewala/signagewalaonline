import React from 'react'
import Navbar from '../elements/Navbar'

export default function Auth({ children }) {
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
            <Navbar
                design={design} />
            <div>{children}</div>
        </>

    )
}
