import { Heading, HStack, Text, VStack } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import getBlogPostContent from '../../server/blog/getBlogPostContent'
import getBlogPosts from '../../server/blog/getBlogPosts'
import MDXComponents from '../../src/components/MDXComponents'
import type { BlogPost } from '../../src/types/BlogPost'

type Props = BlogPost & {
  readingTime: string
  source: MDXRemoteSerializeResult
}

const BlogPostPage: NextPage<Props> = ({
  source,
  readingTime,
  tags,
  title,
  intro,
  createdTime,
  updatedTime
}) => {
  return (
    <>
      <VStack position="relative" alignItems="stretch" w="full" spacing={8}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading as="h1" size="lg">
            {title}
          </Heading>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
          >
            <Text color="gray.500" fontSize="sm">
              {createdTime}
            </Text>
            <Text color="gray.500" fontSize="sm">
              {readingTime}
            </Text>
          </HStack>
        </VStack>
        <MDXRemote {...source} components={MDXComponents} />
      </VStack>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts()
  return {
    paths: posts.map(({ id }) => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  const id = ctx.params.id as string
  const { content, ...props } = await getBlogPostContent(id)
  return {
    props: {
      ...props,
      source: await serialize(content)
    }
  }
}

export default BlogPostPage
