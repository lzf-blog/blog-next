import {
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import type { BlogPost } from '../../types/BlogPost'
import React from 'react'

type Props = BlogPost

const BlogPostCard: React.FC<Props> = ({
  title,
  id,
  updatedTime,
  createdTime,
  intro,
  tags,
  readingTime
}) => {
  const hoverBg = useColorModeValue('gray.100', 'gray.700')
  return (
    <LinkBox as="article">
      <VStack
        alignItems="stretch"
        p={{ base: 0, md: 4 }}
        _hover={{
          bg: hoverBg,
          transform: 'scale(1.025, 1.025)'
        }}
        rounded="md"
        transition="all 0.2s ease-out"
      >
        <VStack alignItems="flex-start">
          <Link href={`/blog/${id}`} passHref>
            <LinkOverlay maxW={'full'}>
              <Heading size="md">{title}</Heading>
            </LinkOverlay>
          </Link>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
          >
            <Text color="gray.500">{createdTime}</Text>
            {tags.map(tag => (
              <Text color="gray.500" key={tag}>
                {tag}
              </Text>
            ))}
          </HStack>
        </VStack>
        <Text color="gray.500">{intro}</Text>
      </VStack>
    </LinkBox>
  )
}
export default BlogPostCard
