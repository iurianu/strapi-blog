import gql from "graphql-tag"

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      data {
        attributes {
          slug
          name
          description
        }
      }
    }
  }
`

export default CATEGORIES_QUERY