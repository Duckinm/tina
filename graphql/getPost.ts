import { PostsDocument } from '.tina/__generated__/types'
import { gql } from 'tinacms'

export const getPostQuery = gql`
  query BlogPostQuery($relativePath: String!) {
    getPostsDocument(relativePath: $relativePath) {
      data {
        title
        body
      }
    }
  }
`

export type getPostQueryRes = {
  getPostsDocument: PostsDocument
}
