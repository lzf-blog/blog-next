import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
  HStack
} from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import { GITHUB_PROFILE, JUEJIN_PROFILE, QQ_EMIL } from '../../constants'
import ExternalLink from '../ExternalLink'
import MyAvatar from '../MyAvatar'

type SocialLink = {
  href: string
  label: string
  color?: string
}

const socialLinks: SocialLink[] = [
  {
    href: JUEJIN_PROFILE,
    label: '掘金',
    color: 'red.300'
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
    color: 'blue.300'
  },
  {
    href: QQ_EMIL,
    label: '邮箱',
    color: 'green.500'
  }
]

const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={12}
    >
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={3}
          mt={{ base: 0, md: 0 }}
        >
          <Heading as="h1" size="lg">
            Hi, 我是刘志飞
          </Heading>
        </Stack>
        <Text as="h2" lineHeight="175%">
          我是一名 <strong>前端工程师</strong>、掘金内容创作者。热爱
          React、Node.js、TypeScript、 JavaScript 等前端技术。
          <br />
          本博客由{' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink> +{' '}
          <ExternalLink href="https://chakra-ui.com">Chakra UI</ExternalLink> +{' '}
          <ExternalLink href="https://www.typescriptlang.org">
            TypeScript
          </ExternalLink>{' '}
          + <ExternalLink href="https://mdxjs.com">MDX</ExternalLink> +{' '}
          <ExternalLink href="https://sandpack.codesandbox.io">
            Sandpack
          </ExternalLink>{' '}
          构建。
        </Text>
        <HStack
          spacing={3}
          justify="space-between"
          w={{ base: 'full', sm: 'auto' }}
        >
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target="_blank"
              variant="ghost"
            >
              {label}
            </Button>
          ))}
        </HStack>
      </VStack>
      <MyAvatar />
    </Stack>
  )
}

export default Hero
