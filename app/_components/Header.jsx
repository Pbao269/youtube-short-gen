import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui/themeToggle'

function Header() {
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
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
