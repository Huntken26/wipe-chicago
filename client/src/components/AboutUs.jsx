import { Box, Container, Image, Text } from "@chakra-ui/react";

//About us component using Chakra UI. Added placeholder image and plain copy text. Replace later

function AboutUs() {
  return (
    <Box bg="gray.50">
      <Container maxW="container.lg" py={20} px={4}>
        <Box display={{ md: "flex" }} alignItems="center">
          <Image src="wipe.png" alt="Stock Image" flexShrink={0} w={{ md: "50%" }} mr={{ md: 8 }} />
          <Box>
            <Text as="h2" fontSize="3xl" fontWeight="bold" mb={4}>Our Mission</Text>
            <Text fontSize="xl">
              We believe that a clean environment leads to a happy and healthy life. That's why we're passionate about providing high-quality cleaning services that help our clients maintain a clean and comfortable home or office. We're committed to using eco-friendly products and practices to minimize our impact on the environment.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AboutUs;
