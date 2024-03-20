import React from 'react'
import { lusitana } from '@/app/fonts'
import { Card } from '.'

export const Dashboard = () => {
    return (
        <div className='container'>
            <h1 className={`text-black text-2xl font-medium py-2 ${lusitana.className}`}>Dashboard</h1>
            <div className='py-4'>
                <Card title='Presupuesto Mensual' amount={220000} />
            </div>
        </div>
    )
}
