import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Typography, useMediaQuery } from '@mui/material';
import Nav from './Nav';
import MobileNav from './MobileNav';


const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <header className="py-3 xl:py-3 bg-[#31363F]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <RouterLink to="/" style={{ textDecoration: 'none' }}>
            <h1 className='pacifico-regular text-4xl techy-text'>techy</h1>
          </RouterLink>
        </div>
        <div className="flex items-center">
          {isDesktop ? <Nav /> : <MobileNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
