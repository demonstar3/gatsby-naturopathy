import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Image } from 'rebass/styled-components';

const contentFulQuery = graphql`
query logoQuery {
  allContentfulAbout {
    nodes {
      profile {
        file {
          url
        }
      }
    }
  }
}
`
const Logo = (
    <StaticQuery
      query={contentFulQuery}
      render={({ allContentfulAbout }) => {
        const { profile } = allContentfulAbout.nodes[0];
        return (
          <Image
            src={profile.file.url}
            width="50px"
            alt="Amanda Lane Logo"
            style={{
              cursor: 'pointer',
            }}
          />
        );
      }}
    />
);


export default Logo