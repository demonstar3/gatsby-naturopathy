import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Image, Flex, Box, Text } from 'rebass/styled-components';
import Fade from 'react-reveal/Fade';
import { LAYOUT_MARGIN } from '../../../styleConstants';

const contentFulQuery = graphql`
query aboutPageQuery {
    allContentfulAbout {
    nodes {
      image {
        file {
          url
        }
      }
      paragraph1 {
        paragraph1
      }
      paragraph2 {
        paragraph2
      }
      paragraph3 {
        paragraph3
      }
      paragraph4 {
        paragraph4
      }
      heading
    }
  }
}
`

const About = () => (
  <StaticQuery
    query={contentFulQuery}
    render={({ allContentfulAbout }) => {
                const { 
                        image, 
                        paragraph1: { paragraph1 }, 
                        paragraph2: { paragraph2 },
                        paragraph3: { paragraph3 }, 
                        paragraph4: { paragraph4 }, 
                        heading 
                    } = allContentfulAbout.nodes[0];
                return (
                  <Fade>
                    <Flex px={[20,LAYOUT_MARGIN]} textAlign="center" justifyContent="center" flexWrap='wrap' mt={[4]}>
                      <Flex
                        width={[1,1,3/5]}
                        px={0}
                        pb={2}
                        mb={4}
                        textAlign="left"
                        justifyContent="center"
                        flexDirection="column"
                        alignItems="center"
                        fontSize={[2, 3, 4]}
                      >  
                        <Heading
                          as="h1"
                          color="primary"
                          fontSize={[4,5]}
                          width={1}
                          pb={[4]}
                        >
                          {heading}
                        </Heading>
                        
                        <Text color="primary" pb={4}>
                          {paragraph1}
                        </Text>
                        <Text color="primary" pb={3}>
                          {paragraph2}
                        </Text>
                        <Text color="primary" pb={3}>
                          {paragraph3}
                        </Text>
                        <Text color="primary" pb={3}>
                          {paragraph4}
                        </Text>
                      </Flex>
                      <Box
                        width={[1,1,2/5]}
                        mb={5}
                      >
                        <Image alt={image.description} src={image.file.url} width={[1,3/4]} />
                      </Box>
                    </Flex>
                  </Fade>
                );
            }}
  />
);

export default About;