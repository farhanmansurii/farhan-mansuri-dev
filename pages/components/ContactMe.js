import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { useColorModeValue } from "@chakra-ui/react";
export default function ContactMe() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 6, sm: 3, md: 5, lg: 6 }}>
              <WrapItem>
                <Box>
                  <Text
                    fontSize={{
                      base: "5xl",
                      sm: "2xl",
                      md: "4xl",
                      lg: "5xl",
                    }}
                    fontFamily="Ogg"
                    textTransform="uppercase"
                    align="center"
                  >
                    Contact
                  </Text>
                  <Text fontFamily="Ogg" mt={{ sm: 3, md: 3, lg: 5 }}>
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack
                      pl={0}
                      spacing={3}
                      alignItems="flex-start"
                      fontFamily="Founders Grotesk"
                      color={useColorModeValue("#00453d", "#9c795d")}
                      fontWeight="light"
                    >
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        leftIcon={<MdPhone size="20px" />}
                        color={useColorModeValue("#00453d", "#9c795d")}
                      >
                        <Text fontWeight="hairline">+91-9867905275</Text>
                      </Button>

                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color={useColorModeValue("#00453d", "#9c795d")}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        <Text fontWeight="hairline">
                          mansurifarhanfm@gmail.com
                        </Text>
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        variant="ghost"
                        color={useColorModeValue("#00453d", "#9c795d")}
                        leftIcon={<MdLocationOn size="20px" />}
                      >
                        <Text fontWeight="hairline">Mumbai , India</Text>
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                    color={useColorModeValue("#c3e3d1", "#9c795d")}
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      icon={<MdFacebook size="28px" />}
                      color={useColorModeValue("#00453d", "#9c795d")}
                    />
                    <IconButton
                      as="a"
                      aria-label="github"
                      variant="ghost"
                      href="https://github.com/farhanmansurii"
                      target="_blank"
                      color={useColorModeValue("#00453d", "#9c795d")}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      href="farhanmansuri#0961"
                      color={useColorModeValue("#00453d", "#9c795d")}
                      variant="ghost"
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="black.300" borderRadius="lg">
                  <Box m={8}>
                    <VStack spacing={5} fontFamily="Ogg">
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none" />
                          <Input type="text" size="sm" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup>
                          <InputLeftElement pointerEvents="none" />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          fontFamily="Founders Grotesk"
                          placeholder="message"
                          _placeholder={{
                            color: useColorModeValue("#aa9a8a", "#9c795d"),
                          }}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          color={useColorModeValue("#c3e3d1", "#131200")}
                          bg={useColorModeValue("#00453d", "#9c795d")}
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
