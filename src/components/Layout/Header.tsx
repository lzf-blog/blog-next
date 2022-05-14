import {
  Container,
  Heading,
  HStack,
  IconButton,
  Link,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { FiCommand, FiMoon, FiSun } from 'react-icons/fi'

const Header = () => {
  const [shortcut, setShortcut] = useState<string>()

  useEffect(() => {
    setShortcut(
      navigator.userAgent.indexOf('Mac OS X') != -1 ? 'Cmd + K' : 'Ctrl + K'
    )
  }, [setShortcut])
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <HStack
      as="nav"
      position="sticky"
      zIndex="popover"
      top={0}
      py={3}
      mb={16}
      bg={useColorModeValue('white', 'gray.800')}
      transitionDuration="normal"
      transitionProperty="background"
    >
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxW="container.md"
        px={{ base: 4, lg: 0 }}
      >
        <NextLink href="/" passHref>
          <Link>
            <Heading size="sm">Home</Heading>
          </Link>
        </NextLink>
        <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
          <Tooltip label={`${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}>
            <IconButton
              aria-label="toggle theme"
              icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
              onClick={toggleColorMode}
              size="md"
              variant="ghost"
            />
          </Tooltip>
          <Tooltip label={`快捷键 (${shortcut})`}>
            <IconButton
              aria-label="toggle theme"
              icon={<FiCommand />}
              size="md"
              variant="ghost"
            />
          </Tooltip>
        </HStack>
      </Container>
    </HStack>
  )
}
export default Header
