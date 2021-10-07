import Layout from 'components/Layouts/BlogLayout'
import { MarkdownSerialize } from 'components/Markdown/Serialize'
import { getAllPostsQuery, getAllPostsQueryRes } from 'graphql/getAllPosts'
import { getPostQuery, getPostQueryRes } from 'graphql/getPost'
import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import { getStaticPropsForTina, staticRequest } from 'tinacms'

interface Props {
  data: getPostQueryRes
}

const BlogPage = ({ data: postData }: Props) => {
  const { data } = postData.getPostsDocument

  return (
    <>
      <h1 className="m-8 text-3xl font-extrabold leading-8 tracking-tight text-center text-yellow-500 sm:text-4xl">
        {data.title}
      </h1>
      {typeof window !== 'undefined' && (
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto text-lg max-w-prose">
            <MarkdownSerialize source={data?.body || ''} />
          </div>
        </div>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const relativePath = params?.slug + '.md'
  const tinaProps = await getStaticPropsForTina({
    query: getPostQuery,
    variables: { relativePath: relativePath },
  })

  return {
    props: {
      ...tinaProps,
    },
  }
}

// : GetStaticPaths
export const getStaticPaths = async () => {
  const postsListData = (await staticRequest({
    query: getAllPostsQuery,
  })) as getAllPostsQueryRes

  const paths = postsListData.getPostsList?.edges?.map((post) => ({
    params: { slug: post?.node?.sys.filename },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

BlogPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>
export default BlogPage
