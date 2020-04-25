import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Image, Flex, Box, Text } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import { Container } from '../../components/Container';
import { LAYOUT_MARGIN } from '../../../styleConstants';

const contentFulQuery = graphql`
query landingPageAboutQuery {
    allContentfulLandingPageAbout {
    nodes {
      image {
        file {
          url
        }
        description
      }
      paragraph {
        paragraph
      }
      paragraph2 {
        paragraph2
      }
    }
  }
}
`

const LandingPageAbout = () => (
  <Container>
    <StaticQuery
      query={contentFulQuery}
      render={({ allContentfulLandingPageAbout }) => {
        const { image, paragraph:{paragraph}, paragraph2:{paragraph2}} = allContentfulLandingPageAbout.nodes[0];

        return (
          <Fade>
            <Flex px={[20,LAYOUT_MARGIN]} textAlign="center" justifyContent="center" flexWrap='wrap'>
              <Box
                width={[1, 2 / 5]}
                px={0}
                pb={2}
                mb={4}
              >
                <Image alt={image.description} src={image.file.url} width={1,1,4/5} />
              </Box>
              <Flex
                width={[1, 3 / 5]}
                px={0}
                pb={2}
                mb={4}
                textAlign="left"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                maxWidth="500px"
                fontSize={[2,3,4]}
              >
                <Text color="primary" pb={4}>
                  {paragraph}
                </Text>
                <Text color="primary" pb={3}>
                  {paragraph2}
                </Text>
  
              </Flex>

            </Flex>
          </Fade>
        );
      }}
    />
  </Container>
);

export default LandingPageAbout;