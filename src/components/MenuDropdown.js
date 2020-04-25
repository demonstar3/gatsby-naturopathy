import React from 'react';
import { Button, Flex } from 'rebass/styled-components';
import PropTypes from 'prop-types';

const MenuDropDown = ({ mobileMenuState, navLinks}) => {
  const {mobileMenuOpen, toggleMobileMenu} = mobileMenuState;
  return (
    <Flex
      onClick={toggleMobileMenu}
      role="navigation"
      color="primary"
      sx={{
      cursor:'pointer',
      position:'relative',
    }}
    >
      MENU
      {
        mobileMenuOpen && (
          <Flex
            as="ul"
            color="primary"
            fontSize={[2, 3]}
            sx={{
          background:'rgba(255, 255, 255, 1)',
          paddingLeft:"0px",
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top:'0',
          left:'0',
          right:'0',
          bottom:'0',
          overflow:'hidden',
          textAlign: 'center',
          alignItems: 'center'
        }}
          > 
            {navLinks}
            <Button onClick={toggleMobileMenu}>X</Button>
          </Flex>
      )}
    </Flex>
  );
}

MenuDropDown.propTypes = {
    navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.number,
    })
  ),
  mobileMenuState: PropTypes.objectOf(
    PropTypes.shape({
      mobileMenuOpen: PropTypes.bool,
      toggleMobileMenu: PropTypes.func,
    })
  ),
};

export default MenuDropDown;


