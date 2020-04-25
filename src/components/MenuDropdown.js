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
          justifyContent: 'space-evenly',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top:'0',
          left:'0',
          right:'0',
          bottom:'0',
          alignItems: 'center'
        }}
          > 
            <Flex 
              px={3}
              width={1}
              sx={{
              alignItems:"right",
              justifyContent:"flex-end"
            }}

            >
              <Button
                variant="outline"
                onClick={toggleMobileMenu}
                sx={{border:"none"}}
              >
                X
              </Button>
            </Flex>
            
            {navLinks}     
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


