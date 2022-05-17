import gql from "graphql-tag"

const TAGS_QUERY = gql`
  query Tags {
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
`

export default TAGS_QUERY