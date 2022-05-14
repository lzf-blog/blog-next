import React, { useEffect } from 'react'
import {
  Heading,
  VStack,
  List,
  ListItem,
  Icon,
  Box,
  LinkOverlay
} from '@chakra-ui/react'
import { CgArrowRight } from 'react-icons/cg'
import BlogPostCard from '../BlogPostCard'
import Link from '../Link'
import type { BlogPost } from 'src/types/BlogPost'

type Props = {
  posts: BlogPost[]
}

const BlogpostsSection: React.FC<Props> = ({ posts = [] }) => {
  return (
    <VStack as="section" alignItems="flex-start" w="full" spacing={4}>
      <Heading size="md">最近的博客文章: </Heading>
      <List w="full" spacing={{ base: 8, md: 2 }}>
        {posts.map(post => (
          <ListItem key={post.id}>
            <BlogPostCard {...post} />
          </ListItem>
        ))}
      </List>
      <Box>
        <Link
          display="flex"
          alignItems="center"
          href="/blog"
          ml={{ base: 0, md: 4 }}
          role="group"
        >
          阅读所有文章
          <Icon
            as={CgArrowRight}
            ml={1}
            color="purple.500"
            _groupHover={{ ml: 3 }}
            transition="margin-left 0.2s ease-out"
          />
        </Link>
      </Box>
    </VStack>
  )
}

export default BlogpostsSection
