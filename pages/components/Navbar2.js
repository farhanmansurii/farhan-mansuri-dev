import { ReactNode } from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Container,
  Spacer,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        position="fixed"
        top="0"
        width="100%"
        backdropFilter="blur(10px)"
        zIndex="1"
        mb={"4rem"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-around"}
          zIndex={1}
        >
          <Text fontFamily="ogg" fontSize="xl" fontWeight="semibold">
            Farhan Mansuri
          </Text>

          <Flex alignItems={"center"} zIndex={1}>
            <Flex
              display={["none", "none", "flex", "flex"]}
              top="0"
              gap={4}
              mr={5}
            >
              <Link href="/">&lt;Home/&gt;</Link>
              <Link href="/about">&lt;About/&gt;</Link>
              <Link href="/work">&lt;MyWorks/&gt;</Link>
              <Link
                href="https://drive.google.com/file/d/1I6xWNMNJLKV6A_qhthHE5YbBKcKzJ5vU/view?usp=sharing"
                target="_blank"
              >
                &lt;MyCV/&gt;
              </Link>
            </Flex>
            <Stack direction={"row"} spacing={7}>
              <Button
                color={useColorModeValue("#00453d", "#141414")}
                bg={useColorModeValue("#c3e3d1", "#cf4c2e")}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu
                isLazy
                id="navbar-menu"
                display={["flex", "flex", "none", "none"]}
              >
                <MenuButton
                  display={{ base: "flex", md: "none" }}
                  as={IconButton}
                  color={useColorModeValue("#00453d", "#141414")}
                  bg={useColorModeValue("#c3e3d1", "#cf4c2e")}
                  icon={<HiOutlineMenuAlt3 />}
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/" ml="">
                    <MenuItem as={Link}>&lt;Home/&gt;</MenuItem>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <MenuItem as={Link}>&lt;About/&gt;</MenuItem>
                  </NextLink>
                  <NextLink href="/work" passHref>
                    <MenuItem as={Link}>&lt;Works/&gt;</MenuItem>
                  </NextLink>
                  <NextLink
                    href="https://drive.google.com/file/d/1I6xWNMNJLKV6A_qhthHE5YbBKcKzJ5vU/view?usp=sharing"
                    target="_blank"
                    passHref
                  >
                    <MenuItem as={Link}>&lt;MyCV/&gt;</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
