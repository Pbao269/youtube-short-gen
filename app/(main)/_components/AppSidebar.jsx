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
import { HomeIcon, LucideFileVideo, Search, WalletCards } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItems = [
  {
    title:"Home",
    url:'/dashboard',
    icon:HomeIcon
  },
  {
    title: 'Create New Video',
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
function AppSidebar() {
  const path = usePathname();
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
            <Button className='w-full'>+  Create New Video</Button>
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
    <SidebarFooter />
  </Sidebar>
  )
}

export default AppSidebar
