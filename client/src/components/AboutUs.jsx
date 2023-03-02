import { Box, Container, Image, Text } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer"; // import the useInView hook

function AboutUs() {
  const [ref, inView] = useInView(); // create a ref and state to track whether the image is in view
  return (
    <Box bg="gray.50" marginBottom="30px">
      <Container maxW="container.lg" py={20} px={4}>
        <Box textAlign="center" borderBottom="3px solid deepblue" pb={4}>
          <Text as="h1" fontSize="4xl" fontWeight="bold" mb={4} > About Us</Text>
        </Box>
        <Box display={{ md: "flex" }} alignItems="center">
          <Image
            src="undraw.png"
            alt="Stock Image"
            flexShrink={0}
            w={{ md: "50%" }}
            mr={{ md: 8 }}
            opacity={inView ? 1 : 0} // set opacity based on whether the image is in view
            ref={ref} // add the ref to the image component
            transition="opacity 1s ease-in-out" // add a transition to the opacity property
          />
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


