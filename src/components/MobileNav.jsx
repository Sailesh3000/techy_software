import React, { useState } from 'react';
import { Drawer, Box, Typography } from '@mui/material';
import Hamburger from 'hamburger-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

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

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname;

  const toggleDrawer = () => {
    setOpen(!isOpen);
  };

  const handleScroll = (scrollTo) => {
    if (pathName === '/') {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        toggleDrawer();
      }
    }
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <Hamburger toggled={isOpen} toggle={toggleDrawer} size={32} color="white" />
      </div>
      <Drawer anchor='right' open={isOpen} onClose={toggleDrawer}>
        <div className='flex justify-center items-center bg-[#31363F]'>
          <Hamburger toggled={isOpen} toggle={toggleDrawer} size={32} color="white" />
        </div>
        <Box
          sx={{
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '38vh',
            minHeight: '100vh',
            backgroundColor: '#31363F',
            zIndex: -1
          }}
        >
          <Box
            sx={{
              mt: 4,
              mb: 8,
              textAlign: 'center',
              color: '#3ABEF9',
            }}
          >
            <RouterLink to="/" onClick={toggleDrawer}>
              <Typography variant="h4" component="h1" className='font-semibold'>
                Techy
              </Typography>
            </RouterLink>
          </Box>
          <nav className='flex flex-col justify-center items-center gap-8'>
            {links.map((link, index) => (
              <React.Fragment key={index}>
                {pathName === '/' ? (
                  <ScrollLink
                    to={link.scrollTo}
                    smooth={true}
                    duration={500}
                    onClick={() => handleScroll(link.scrollTo)}
                    style={{
                      cursor: 'pointer',
                      color: location.hash === `#${link.scrollTo}` ? '#3ABEF9' : 'white',
                      borderBottom: location.hash === `#${link.scrollTo}` ? '2px solid #3ABEF9' : 'none',
                      textTransform: 'capitalize',
                      fontWeight: 500,
                      transition: 'all',
                      whiteSpace: 'nowrap',
                      fontSize: '20px'
                    }}
                  >
                    <Typography variant="h6" component="div">
                      {link.name}
                    </Typography>
                  </ScrollLink>
                ) : (
                  <RouterLink to={link.path} onClick={toggleDrawer}>
                    <Typography
                      variant="h6"
                      component="div"
                      style={{
                        color: link.path === pathName ? '#3ABEF9' : 'white',
                        borderBottom: link.path === pathName ? '2px solid #3ABEF9' : 'none',
                        textTransform: 'capitalize',
                        fontWeight: 500,
                        transition: 'all',
                        whiteSpace: 'nowrap',
                        fontSize: '20px'
                      }}
                    >
                      {link.name}
                    </Typography>
                  </RouterLink>
                )}
              </React.Fragment>
            ))}
          </nav>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileNav;
