import { PostsConnection } from '.tina/__generated__/types'
import { gql } from 'tinacms'

export const getAllPostsQuery = gql`
  query GetPostsList {
    getPostsList {
      edges {
        node {
          sys {
            filename
          }
        }
      }
    }
  }
`

export type getAllPostsQueryRes = { getPostsList: PostsConnection }
