import gql from "graphql-tag"

const WRITERS_QUERY = gql`
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

export default WRITERS_QUERY