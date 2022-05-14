import { Box, AspectRatio, Flex, Image } from '@chakra-ui/react'

const MyAvatar = () => {
  return (
    <Flex position="relative" justify="center" pb={4} mb={0}>
      <AspectRatio as="figure" flexShrink={0} w={56} h={56} ratio={1}>
        <Box overflow="hidden" p={5}>
          <Image src="/assets/images/avatar.jpg" rounded="full" alt="头像" />
        </Box>
      </AspectRatio>
    </Flex>
  )
}

export default MyAvatar
