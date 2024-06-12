import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Typography } from '@mui/material';

const links = [
  {
    name: 'Home',
    path: '/',
    scrollTo: 'home',
  },
  {
    name: 'About Us',
    path: '/',
    scrollTo: 'about',
  },
  {
    name: 'Services',
    path: '/',
    scrollTo: 'services',
  },
  {
    name: 'Contact Us',
    path: '/',
    scrollTo: 'contact',
  },
];

const Nav = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const handleScroll = (scrollTo) => {
    scroller.scrollTo(scrollTo, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {pathName === '/' ? (
            <ScrollLink
              to={link.scrollTo}
              smooth={true}
              duration={500}
              onClick={() => handleScroll(link.scrollTo)}
              className={`cursor-pointer text-2xl font-semibold ${
                location.hash === `#${link.scrollTo}` ? 'text-[#3ABEF9] border-b-2 border-[#3ABEF9]' : 'text-white'
              }`}
              activeClass="text-[#3ABEF9] border-b-2 border-[#3ABEF9]"
              spy={true}
            >
              {link.name}
            </ScrollLink>
          ) : (
            <RouterLink to={link.path} className="no-underline">
              <Typography
                variant="h6"
                component="div"
                className={`cursor-pointer text-2xl font-semibold ${
                  link.path === pathName ? 'text-[#3ABEF9] border-b-2 border-[#3ABEF9]' : 'text-white'
                }`}
              >
                {link.name}
              </Typography>
            </RouterLink>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Nav;
