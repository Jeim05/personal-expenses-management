import React from 'react'
import { HomeIcon, DocumentDuplicateIcon, CircleStackIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const links = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Lista de Gastos", href: "/gastos", icon: CircleStackIcon },
    { name: "Resumen General", href: "/resumen", icon: DocumentDuplicateIcon },

]

export default function NavLinks() {
    return (
        <>
            {
                links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link href={link.href} key={link.href}
                            className='flex h-[48px] grow items-center justify-center gap-4 p-3 text-sm text-white hover:text-[#FE805C] hover:bg-[#303040] hover:border-r-4 hover:border-r-[#FE805C] md:flex-none md:justify-start md:p-2 md:pl-3'>
                            <LinkIcon className='w-6' />
                            <p>{link.name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
}
