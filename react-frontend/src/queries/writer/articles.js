import gql from "graphql-tag";

const WRITER_ARTICLES_QUERY = gql`
  query Writer($slug: String!) {
    writers(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          name
          description
          articles {
            data {
              attributes {
                slug
                title
                content
                category {
                  data {
                    attributes {
                      name
                      slug
                      description
                    }
                  }
                }
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default WRITER_ARTICLES_QUERY;