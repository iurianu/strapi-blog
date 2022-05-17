import gql from "graphql-tag"

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
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
          tags {
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
        }
      }
    }
  }
`

export default ARTICLES_QUERY