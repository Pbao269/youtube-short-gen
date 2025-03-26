'use client'
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import Image from 'next/image'
import { Gem, HomeIcon, LucideFileVideo, Search, WalletCards } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthContext } from '@/app/theme-provider'

const MenuItems = [
  {
    title:"Home",
    url:'/dashboard',
    icon:HomeIcon
  },
  {
    title: 'Create',
    url: '/create-new-video',
    icon: LucideFileVideo
  },
  {
    title: 'Explore',
    url: '/explore',
    icon: Search
  },
  {
    title: 'Billing',
    url: '/billing',
    icon: WalletCards
  }
]
/**
 * AppSidebar is a component that displays a sidebar that contains all the
 * features of the app. It displays a button to create a new video, a menu
 * with the following items: "Home", "Create New Video", "Explore", and
 * "Billing". The sidebar also displays the user's credits and a button to
 * purchase more credits.
 *
 * @returns A JSX element representing the AppSidebar component.
 */
function AppSidebar() {
  const path = usePathname();
  const { dbUser:user } = useAuthContext();
  return (
    <Sidebar>
    <SidebarHeader>
      <div className='flex items-center justify-center p-3 gap-3'>
        <Image src={'/logo.svg'} alt="Logo" width={50} height={50} />
        <h2 className=' text-2xl font-bold'>Short Gen</h2>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <div className='my-8 mx-6'>
            <Link href="/create-new-video">
              <Button className='w-full'>+  Create New Video</Button>
            </Link>
          </div>
          <SidebarMenu>
            {MenuItems.map((item, index) => (
              <SidebarMenuItem key={index} className='mt-3 mx-6'>
                <SidebarMenuButton isActive={path===item?.url} className='p-5'>
                  <Link href={item?.url} className='flex items-center gap-4 p-4'>
                    <item.icon />
                    <span>{item?.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter>
      <div className="p-5 border rounded-lg mb-6 dark:bg-secondary bg-background">
        <div className='flex items-center justify-between'>
          <Gem />
          <h2>{user?.credits} Credits Left</h2>
        </div>
        <Button className='w-full mt-4'>More Credits</Button>
      </div>
    </SidebarFooter>
  </Sidebar>
  )
}

export default AppSidebar
