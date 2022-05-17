import gql from "graphql-tag"

const ARTICLE_QUERY = gql`
  query Article($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          title
          content
          category {
            data {
              attributes {
                slug
                name
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
          tags {
            data {
              attributes {
                slug
                name
                description
              }
            }
          }
        }
      }
    }
  }
`

export default ARTICLE_QUERY