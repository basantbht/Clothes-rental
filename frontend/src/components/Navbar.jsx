import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faLessThan, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { RentContext } from '../context/RentContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(RentContext);

  const logout = async () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT US</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
        <FontAwesomeIcon onClick={() => setShowSearch(true)} className='w-5 cursor-pointer' icon={faMagnifyingGlass} />


        <div className='group relative'>
          <FontAwesomeIcon onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' icon={faUser} />
          {/* Dropdown menu */}
          {token && 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-600 rounded">

              <p className='cursor-pointer hover:text-black'>My profile</p>

              <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>

              <p className='cursor-pointer hover:text-black' onClick={logout}>Logout</p>
            </div>

          </div>}
        </div>

        <Link to='/cart' className='relative'>
          <FontAwesomeIcon className='w-5 min-w-5' icon={faCartShopping} />

          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

        </Link>

        {/* for responsive design */}

        <FontAwesomeIcon onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden' icon={faBars} />
      </div>

      {/* sidebar for mobile */}

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-2 p-3 cursor-pointer'>
            <FontAwesomeIcon icon={faLessThan} />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>

        </div>
      </div>



    </div>
  )
}

export default Navbar