'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui/themeToggle'
import Authentication from './Authentication'
import { useAuthContext } from '../theme-provider'
import Link from 'next/link'

function Header() {
    const { authUser: user } = useAuthContext();
    return (
        <div className='p-4 flex items-center justify-between'>
            {/* Logo & Title */}
            <div className='flex items-center gap-2'>
                <Image src={'/logo.svg'} alt="Logo" width={50} height={50} />
                <h2 className='text-2xl font-bold'>Youtube Short Gen</h2>
            </div>

            {/* Right Section - Toggle & Sign In */}
            <div className='flex items-center gap-5'>
                <ThemeToggle/>
                {!user?
                    <Authentication>
                        <Button>Sign In</Button>
                    </Authentication>
                    : 
                    <div className='flex items-center gap-2'>
                    <Link href="/dashboard">
                    <Button>Dashboard</Button>
                    </Link>
                    { user?.photoURL && <Image src={user?.photoURL} alt="User" width={40} height={40} className='rounded-full'/>}
                    </div>
                }
            </div>
        </div>
    )
}

export default Header
