import React, { Fragment } from 'react';
import { Box } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import { Link } from "gatsby"
import colors from '../../colors';

const mobileStyles = {
  marginLeft:'0px',
  padding:'10px',
  fontSize:'40px',
}

const RouteLink = ({ link, title, isDesktop }) => (
  <Fragment>
    <Box
      as="li"
      ml={[3, 4]}
      color="primary"
      fontSize={[2, 3]}
      style={isDesktop ? {} : mobileStyles}
      sx={{
        listStyleType:'none'
      }}
    >
      <Link 
        to={`/${link}`}
        activeStyle={{ 
                    borderBottom: `${colors.secondary} 4px solid`,
                  }}
      >
        {title}
      </Link>
    </Box>
  </Fragment>
);

RouteLink.propTypes = {
  link: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default RouteLink;
