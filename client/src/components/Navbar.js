import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-yellow-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo and Home link */}
        <div>
          <Link to='/' className='text-white text-lg font-bold'>
            Open House Animation Studio
          </Link>
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex space-x-4'>
          <Link to='/' className='text-white hover:text-gray-200'>
            Home
          </Link>
          <Link to='/wall-of-fame' className='text-white hover:text-gray-200'>
            Wall of Fame
          </Link>
          <Link to='/student-work' className='text-white hover:text-gray-200'>
            Student Work
          </Link>
          <Link to='/programs' className='text-white hover:text-gray-200'>
            Program
          </Link>
          <Link to='/placement' className='text-white hover:text-gray-200'>
            Placement
          </Link>
          {/* Add more navigation links as needed */}
        </div>

        {/* Mobile Menu Button */}
        {/* Implement toggle functionality to show/hide mobile menu */}
        <button className='md:hidden text-white'>
          <svg
            className='w-6 h-6'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
