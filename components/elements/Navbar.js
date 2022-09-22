import Image from 'next/image'
import React from 'react'

export default function Navbar({ design }) {
    return (
        <>
            <div className={`flex flex-grow-0 justify-between items-center px-4 py-1 h-auto
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
            </div>
        </>
    )
}
