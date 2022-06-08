import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

export default function Newsletter() {
  return (
    <Flex mx="3rem" align={"center"} justify={"center"} mt="4rem">
      <Stack
        border="2px solid "
        borderColor={useColorModeValue("#c3e3d1", "#9c795d")}
        rounded={"xl"}
        p={10}
        spacing={8}
        align={"center"}
      >
        <Stack align={"center"} spacing={2}>
          <Text textTransform={"uppercase"} fontSize={"3xl"} fontFamily="Ogg">
            Subscribe
          </Text>
          <Text fontSize={"lg"} fontFamily="Founders Grotesk">
            Subscribe to my newsletter & stay up to date with my upcoming
            projects and alerts from me !
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
          <Input
            type={"text"}
            placeholder={"elon@musk.com"}
            _placeholder={{ color: useColorModeValue("#aa9a8a", "#9c795d") }}
            border={"2px"}
            borderColor={useColorModeValue("#c3e3d1", "#9c795d")}
            _focus={{
              outline: "none",
            }}
          />
          <Button
            color={useColorModeValue("#c3e3d1", "#131200")}
            bg={useColorModeValue("#00453d", "#9c795d")}
            flex={"1 0 auto"}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
