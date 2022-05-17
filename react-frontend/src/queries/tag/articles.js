import gql from "graphql-tag";

const TAGS_ARTICLES_QUERY = gql`
  query Tags($slug: String!) {
    tags(filters: { slug: { eq: $slug } }) {
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
                tags {
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

export default TAGS_ARTICLES_QUERY;