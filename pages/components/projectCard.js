import {
  Box,
  Container,
  ListItem,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Tilt from "react-parallax-tilt";
import farhan from "./images/farhan.jpg";
import unsplash from "./images/unsplash.png";
import PropTypes from "prop-types";
import { Image } from "@chakra-ui/react";

export const ProjectCard = ({
  snapshot,
  logo,
  title,
  description,
  tools,
  live,
  proto,
  repo,
  ...props
}) => {
  return (
    <Container w="sm" pb="3rem">
      <Tilt>
        <Box w="full" mb="1rem">
          <Image src={snapshot} w="full" borderRadius="xl" />
        </Box>
      </Tilt>
      <Box>
        <Text fontSize="2xl" fontWeight="bold" fontFamily="Ogg">
          {title}
        </Text>
        <Text fontSize="md" fontWeight="hairline" fontFamily="Poppins">
          {description}
        </Text>
        <Flex justify="space-between" fontSize="lg" my="1rem">
          <Flex direction="row" gap="2">
            <Text fontSize="sm" borderRadius="xl" px="1rem" py="0.5rem" mx="4">
              {tools}
            </Text>
          </Flex>
          <Flex gap={"1rem"}>
            <a href={repo} target="_blank">
              <IconButton
                size="xs"
                variant="ghost"
                icon={<AiFillGithub size="sm" />}
              />
            </a>
            <a href={live} target="_blank">
              <IconButton
                size="xs"
                variant="ghost"
                icon={<AiOutlineLink size="sm" />}
              />
            </a>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

ProjectCard.propTypes = {
  snapshot: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  live: PropTypes.string,
  proto: PropTypes.string,
  repo: PropTypes.string.isRequired,
};
