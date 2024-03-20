import Link from 'next/link'
import React from 'react'
import { NavLinks } from '.'

export default function SideNav() {
    return (
        <aside className='bg-[#262636] flex flex-col h-full pl-3 py-4 md:pl-2'>
            <Link href="/" className='mb-2 flex justify-center p-4'>
                <h1 className='text-xl text-[#FE805C]'>Logo</h1>
            </Link>
            <div className='flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2 '>
                <NavLinks />
            </div>
        </aside >
    )
}
