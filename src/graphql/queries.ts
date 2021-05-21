import { gql } from "graphql-request";

export const GET_HOME_PAGE = gql`
  query getHome {
    homepages {
      hellotext
      introtext {
        html
      }
      introabout {
        html
      }
      about {
        html
      }
    }
    projects {
      title
      about
      sourcelink
      link
      image {
        url
      }
    }
  }
`;
