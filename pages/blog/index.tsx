import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import type { ChangeEventHandler } from 'react'
import type { BlogPost } from '../../src/types/BlogPost'
import BlogPostCard from '../../src/components/BlogPostCard'
import {
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListItem,
  Text,
  VStack
} from '@chakra-ui/react'
import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import getBlogPosts from '../../server/blog/getBlogPosts'

type Props = {
  posts: BlogPost[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  const [displayPosts, setDisplayPosts] = useState<BlogPost[]>(posts)
  const onSearch: ChangeEventHandler<HTMLInputElement> = event => {
    const query = event.currentTarget.value

    const filteredPosts = posts.filter(post =>
      [
        post.title.toLowerCase().includes(query.toLowerCase()),
        post.intro.toLowerCase().includes(query.toLowerCase())
      ].some(Boolean)
    )

    setDisplayPosts(filteredPosts)
  }
  return (
    <>
      <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
        <Heading size="md">Blog.</Heading>
        <Text fontSize="md">总有 {posts.length} 篇文章。</Text>
        <InputGroup>
          <InputLeftElement pointerEvents={'none'}>
            <Icon as={HiOutlineSearch} color={'gray.400'} />
          </InputLeftElement>
          <Input onChange={onSearch} placeholder="搜索文章" variant="filled" />
        </InputGroup>
      </VStack>
      <List w="full" spacing={2} mt={6}>
        {displayPosts.map(post => (
          <ListItem key={post.id}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      {displayPosts.length === 0 && <Text>没有查询到相应的文章.</Text>}
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = (await getBlogPosts()) as BlogPost[]
  return {
    props: { posts },
    revalidate: 60
  }
}
export default Blog
