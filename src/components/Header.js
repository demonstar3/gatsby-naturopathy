import React from 'react';
import Headroom from 'react-headroom';
import { Button, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import MenuDropDown from './MenuDropdown';
import RouteLink from './RouteLink';
import Logo from './Logo';
import { LAYOUT_MARGIN } from '../../styleConstants';

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${(props) => props.theme.colors.white};
  }
  background:${(props) => props.theme.colors.white};;
  position: relative;
  width: 100%;
`;

const CTA = ({ link, title }) => (
  <Button variant='secondary'>
    <Link style={{ color: 'white' }} to={`/${link}`}>{title}</Link>
  </Button>
)

const Header = ({ links, isDesktop, mobileMenuState }) => {

  const navLinks = links.map(({ title, link }) => (
    <RouteLink
      key={title}
      link={link}
      title={title}
      selected={false}
      isDesktop={isDesktop}
    />
  ));

  return (
    <HeaderContainer>
      <Fade top>
        <Flex
          as="nav"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          p={3}
          mx={[0, 0, LAYOUT_MARGIN]}
          role="navigation"
        >
          {Logo}
          { isDesktop ? 
            <Flex as='ul' mr={[0, 3, 5]}>{navLinks}</Flex> :
            <MenuDropDown navLinks={navLinks} mobileMenuState={mobileMenuState} />
          }
          <CTA link="bookings" title="BOOK NOW" />
        </Flex>
      </Fade>
    </HeaderContainer>
  );
}

CTA.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Header.propTypes = {
  mobileMenuState: PropTypes.objectOf(
    PropTypes.shape({
      mobileMenuOpen: PropTypes.bool,
      toggleMobileMenu: PropTypes.func,
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.number,
    })
  ),
  isDesktop: PropTypes.bool.isRequired
};

export default Header;


