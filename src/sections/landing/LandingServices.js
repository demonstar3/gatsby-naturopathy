

import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Image, Flex, Box, Text } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import { useWindowSize } from '../../hooks/useWindowSize';
import { LAYOUT_MARGIN } from '../../../styleConstants';


const contentFulQuery = graphql`
query landingServices {
    allContentfulService {
    nodes {
      image {
        file {
          url
        }
        description
      }
      heading
      paragraph {
        paragraph
      }
    }
  }
}
`

const isEven = (num) => {
    return num % 2 === 0;
}

const CardImage = ({ image }) => (
  <Box
    bg="background"
    width={[1, 1/2]}
  >
    <Image
      sx={{height:'100%'}}
      alt={image.description}
      src={image.file.url}
      width={1}
    />
  </Box>
)

const CardText = ({ heading, paragraph }) => (
  <Flex
    width={[1, 1/2]} 
    bg="background"
    textAlign={["center", "left"]}
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
    fontSize={[2, 3, 4]}
    minHeight="460px"
  >   
    <Box p={[5]}>
      <Heading
        as="h3"
        color="primary"
        fontSize={[4]}
        pb={[4]}
      >
        {heading}
      </Heading>
      <Text color="primary" pb={4}>
        {paragraph}
      </Text>
    </Box>
        
  </Flex>
)

const LandingServices = () => {
    const { isDesktop } = useWindowSize();
    return (
      <StaticQuery
        query={contentFulQuery}
        render={({ allContentfulService }) => {
            return (
              <Fade>
                {
                  allContentfulService.nodes.map((service, index) => {
                      const { paragraph: { paragraph }, image, heading } = service;
                      return (
                        <Flex px={['0px', LAYOUT_MARGIN]} textAlign="center" justifyContent="center" flexWrap='wrap'>
                          {
                              isEven(index) && isDesktop ? (
                                <Fragment>
                                  <CardImage image={image} />
                                  <CardText heading={heading} paragraph={paragraph} />
                                </Fragment>
                                  ) : (
                                    <Fragment>
                                      <CardText heading={heading} paragraph={paragraph} />
                                      <CardImage image={image} />
                                    </Fragment>
                                  )}
                        </Flex>
                      )
                  })
                }
              </Fade>
            );
        }}
      />
    );
}
    
export default LandingServices;

CardText.propTypes = {
  paragraph: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

CardImage.propTypes = {
  image: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
      }).isRequired,
    })
  ),
};
