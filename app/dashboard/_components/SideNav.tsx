import React from 'react'
import Image from 'next/image'
import { Home } from 'lucide-react'

function SideNav() {

    const MenuList= [
        {
            name:"Home",
            icon:Home,
            path:'/dashboard'
        }
        {
            name:"Home",
            icon:Home,
            path:'/dashboard'
        }
        {
            name:"Home",
            icon:Home,
            path:'/dashboard'
        }
        {
            name:"Home",
            icon:Home,
            path:'/dashboard'
        }
    ]



  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
        </div>
    </div>
  )
}

export default SideNav