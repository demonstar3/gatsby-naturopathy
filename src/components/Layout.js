import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import config from 'react-reveal/globals';
import preset from '@rebass/preset';
import Footer from "./Footer";
import Header from "./Header";
import colors from '../../colors';
import Helmet from './Helmet';
import { useWindowSize } from '../hooks/useWindowSize';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before { 
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box; 
    margin: 0;
    font-family: Cabin, 'Open Sans', sans-serif;
    overflow-x: hidden;
    overflow: ${props => props.mobileMenuOpen ? "hidden" : ""};
  }
  a {
    text-decoration:none;
    color:${colors.primary}
  }
`;

config({ ssrFadeout: true });

const theme = {
  ...preset,
  colors,
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

const links = [
  {
    title: 'HOME',
    link: ''
  },
  {
    title: 'ABOUT',
    link: 'about'
  },
  {
    title: 'BLOG',
    link:'blog'
  },
  {
    title: 'BOOKINGS',
    link: 'bookings'
  }, 
]

const Layout = ({ children }) => {
  const { isDesktop } = useWindowSize();

  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenuOpen);

  return (
    <main>
      <GlobalStyle mobileMenuOpen={mobileMenuOpen} />
      <ThemeProvider theme={theme}>
        <ScrollingProvider>
          <Helmet />
          <Header mobileMenuState={{mobileMenuOpen, toggleMobileMenu}} isDesktop={isDesktop} links={links} />
          {children}
          <Footer />
        </ScrollingProvider>
      </ThemeProvider>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
