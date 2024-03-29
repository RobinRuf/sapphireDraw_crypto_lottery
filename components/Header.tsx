import React from 'react'
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { useAddress, useDisconnect } from '@thirdweb-dev/react'

function Header() {
    const address = useAddress();
    const disconnect = useDisconnect();

  return (
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'> 
    <div>
        <div className='flex items-center md:hidden'>
            <img className='h-6 w-6 sm:h-8 sm:w-8 -mt-2 mr-2' src={"../sapphire.png"} alt='' />
            <h1 className='text-2xl sm:text-3xl text-white font-bold font-brand'>Sapphire Draw</h1>
        </div>
        <p className='text-sm text-white turncate'>Wallet: {address?.substring(0,5)}...{address?.substring(address.length, address.length - 5)}</p>
    </div>

    <div className='items-center justify-center hidden md:flex md:col-span-3'>
        <img className='h-16 w-16 mr-5' src={"../sapphire.png"} alt='' />
        <h1 className='text-5xl text-white font-bold font-brand'>Sapphire Draw</h1>
    </div>

    {/* <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
        <div className='bg-[#011570]/40 p-4 space-x-2 rounded-lg'>
            <NavButton isActive title='Buy Tickets' />
            <NavButton onClick={disconnect} title='Logout' />
        </div>
    </div> */}

    <div className='flex flex-col ml-auto text-right'>
        {/* <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer' /> */}
        
        <span>
            <NavButton onClick={disconnect} title='Logout' />
        </span>
    </div>
    </header>
  )
}

export default Header