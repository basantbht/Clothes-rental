import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faList } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

            <NavLink className='flex item-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-l'to='/add'>
                <FontAwesomeIcon className='w-5 h-5' icon={faCirclePlus} />
                <p className='hidden md:block'>Add items</p>
            </NavLink>

            <NavLink className='flex item-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-l' to='/list'>
                <FontAwesomeIcon className='w-5 h-5' icon={faList} />
                <p className='hidden md:block'>List items</p>
            </NavLink>

            <NavLink className='flex item-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-l' to='/orders'>
                <FontAwesomeIcon className='w-5 h-5' icon={faList} />
                <p className='hidden md:block'>Orders items</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar