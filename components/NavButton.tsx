import React from 'react'

interface Props {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

function NavButton({ title, isActive, onClick }: Props) {
  return (
    <button onClick={onClick} className={`${isActive && 'bg-[#011570]/50'} hover:bg-[#011570]/50 font-bold text-white py-2 px-4 rounded`}>
        {title}
    </button>
  )
}

export default NavButton