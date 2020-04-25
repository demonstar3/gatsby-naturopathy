import React from 'react';
import { StaticQuery, graphql , Link } from 'gatsby';
import { Button, Heading, Image, Flex, Box, Text } from 'rebass/styled-components';

import Fade from 'react-reveal/Fade';
import { Container } from '../../components/Container';
import { LAYOUT_MARGIN } from '../../../styleConstants';

const contentFulQuery = graphql`
query CallToActionQuery {
    allContentfulCallToAction {
    nodes {
      image {
        file {
          url
        }
      }
      paragraph
      heading
      buttonText
    }
  }
}
`

const CallToAction = () => (
  <Container>
    <StaticQuery
      query={contentFulQuery}
      render={({ allContentfulCallToAction }) => {
        const { image, heading, paragraph, buttonText } = allContentfulCallToAction.nodes[0];

        return (
          <Fade>
            <Flex px={[null, LAYOUT_MARGIN]} textAlign="center" justifyContent="center" flexWrap='wrap'>
              <Flex
                bg="background"
                width={[1, 3 / 5]}
                flexDirection="column"
                justifyContent="center"
                alignItems="space-around"
                p={[4,5]}
              >
                <Heading
                  as="h2"
                  color="primary"
                  fontSize={[3]}
                  pb={[2,3,5]}
                >
                  {heading}
                </Heading>
                <Text
                  color="primary"
                  fontSize={[2]}
                  pb={[3]}
                >
                  {paragraph}
                </Text>
                <Button
                  bg="secondary"
                  width={1}
                  color="white"
                  fontSize={[3]}
                  sx={{
                      alignSelf:"flex-end"
                    }}
                >
                  <Link style={{ color: 'white' }} to="/bookings">{buttonText}</Link>
                </Button>
              </Flex>
              <Box
                bg="background"
                width={[0, 2 / 5]}
              >
                <Image src={image.file.url} />
              </Box>
            </Flex>
          </Fade>
        );
      }}
    />
  </Container>
);

export default CallToAction;
