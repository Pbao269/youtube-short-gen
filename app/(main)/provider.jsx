'use client'
import { SidebarProvider } from '@/components/ui/sidebar'
import React, { useEffect } from 'react'
import AppSidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useAuthContext } from '../theme-provider.js'
import { useRouter } from 'next/navigation'

function DashboardProvider({children}) {
  const {user} = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    user && CheckedUserAuth();
  }, [user]);
  const CheckedUserAuth = () => {
    if (!user) {
      router.replace("/");
    }
  }
  return (
    <SidebarProvider>
        <AppSidebar />
        <div className='w-full'>
            <AppHeader />
            <div className='p-10'>
              {children}
            </div>
            
        </div>
    </SidebarProvider>
  )
}

export default DashboardProvider
