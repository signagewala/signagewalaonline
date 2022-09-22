import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar({ design }) {
    const [toggleNavbar, setToggleNavbar] = useState(false)
    const handleNav = () => {
        setToggleNavbar((toggleNavbar) => !toggleNavbar)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <button
                            onClick={handleNav}
                            className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                            type="button"
                        >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div className="w-24 navbar-brand" >
                            <Link href="/">
                                <Image className='cursor-pointer' src={design.logo} width={design.logosize.width} height={design.logosize.height} alt="logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                        <ul className={`${toggleNavbar ? "absolute bg-white shadow-md px-4 top-16 min-h-screen left-0" : "hidden"} navbar-nav mr-auto lg:hidden lg:flex-row`}>
                            <li className="nav-item">
                                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
                            </li>
                            <li className="nav-item mb-2 lg:mb-0">
                                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center lg:ml-auto">
                        <Link href="/auth/login">
                            <button type="button" className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" >Login</button>
                        </Link>
                        <Link href="/auth/register">
                            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >Register</button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* //old navbar */}
            {/* <div className={`flex flex-grow-0 justify-between items-center px-4 py-1 h-auto
            ${design.bgcolor} 
            ${design.textcol}`}>
                <div className='w-28'>
                    <Image src={design.logo} width={design.logosize.width} height={design.logosize.height} alt='Logo' />
                </div>
                <div className='flex gap-2'>
                    {design.content.map((menu, i) => (
                        <div key={i}>{menu.menu}</div>
                    ))}
                </div>
            </div> */}
        </>
    )
}
