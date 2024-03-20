import { CardProps } from '@/types'
import React from 'react'
import { BanknotesIcon } from '@heroicons/react/24/outline'

export const Card = ({ title, amount, containerStyles }: CardProps) => {
    return (
        <div className='bg-white rounded-md px-4 py-6'>
            <div className='flex gap-5'>
                <div className='grow'>
                    <h2 className='text-[#8c8c91] text-lg font-medium'>{title}</h2>
                    <p className='text-xl font-bold'>₡{amount}</p>
                </div>
                <div className='flex-none rounded-full bg-[#FEF2EE] p-3'>
                    <BanknotesIcon className='w-8 object-contain text-[#FE805C]'/>
                </div>
            </div>
        </div>
    )
}
