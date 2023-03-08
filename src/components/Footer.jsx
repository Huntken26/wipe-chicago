import React from 'react';
import { Box, Container, Text, Badge } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.800" py={8}>
      <Container maxW="container.lg">
        <Text color="white" fontWeight="bold" mb={2}>Contact Us</Text>
        <Text color="white" mb={2}>738 4000 W Montrose Ave</Text>
        <Text color="white" mb={4}>Chicago, IL USA 60641</Text>
        <a href="tel:+1234567890">
          <Badge colorScheme="purple" mb={4}>Call Us: (847) 916-8648</Badge>
        </a>
        <Box display="flex" justifyContent="space-between">
          <a href="www.linkedin.com/in/wipechicagollc">
            <Badge colorScheme="blue" mr={4}>LinkedIn</Badge>
          </a>
          <a href="wipechicago@gmail.com">
            <Badge colorScheme="pink">Email: wipechicago@gmail.com</Badge>
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

