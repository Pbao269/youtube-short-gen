'use client'
import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { useAuthContext } from '@/app/theme-provider';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/themeToggle';

function AppHeader() {
    const { user } = useAuthContext();

    return (
        <div className="flex justify-between items-center p-4 w-full">
            {/* Left Side: Sidebar Trigger */}
            <SidebarTrigger />

            {/* Right Side: Theme Toggle and User Photo */}
            {user?.photoURL && (
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Image
                        src={user?.photoURL}
                        alt="User"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                </div>
            )}
        </div>
    )
}

export default AppHeader;
