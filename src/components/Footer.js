import React, { Fragment } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Box, Link, Flex } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';
import Logo from './Logo';
import colors from '../../colors';

const FooterContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media (max-width: 400px) {
    flex-direction: column-reverse;

    & > * {
      margin-bottom: 10px;
    }
  }
`;

const TextFooter = styled(Text)`
  color: ${(props) => props.theme.colors.primary};

  & a {
    color: ${(props) => props.theme.colors.primary};
    transition: color ease 0.5s;

    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        contentfulAbout {
          name
          socialLinks {
            id
            url
            name
          }
        }
      }
    `}
    render={(data) => {
      const { name, socialLinks } = data.contentfulAbout;
      console.log(socialLinks);
      
      return (
        <Box
          p={[2, 3]}
          backgroundColor="white"
          as="footer"
          sx={{
          borderTop:`1px solid ${colors.primary}`
        }}
        >
          <FooterContainer>
          
            <Fade left>
              {Logo}
              <TextFooter fontSize={[2, 3]}>
                {name}
              </TextFooter>
            </Fade>
            <Flex>
              <Fade right>
                <Fragment>
                  {socialLinks.map(({ id, ...rest }) => ( 
                    <Box mx={[2, 3]} fontSize={[1,3]} key={id}>
                      <SocialLink {...rest} color="primary" />
                    </Box>
                    ))}
                </Fragment>
              </Fade>
            </Flex>
            
          </FooterContainer>
        </Box>
      );
    }}
  />
);

export default Footer;
