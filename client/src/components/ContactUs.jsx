import React from 'react';
import { Box, Container, Text, Badge } from '@chakra-ui/react';

function ContactUs() {
  return (
    <Box bg="gray.800" py={8}>
      <Container maxW="container.lg">
        <Text color="white" fontWeight="bold" mb={2}>Contact Us</Text>
        <Text color="white" mb={2}>123 Main Street</Text>
        <Text color="white" mb={4}>Anytown, USA 12345</Text>
        <a href="tel:+1234567890">
          <Badge colorScheme="purple" mb={4}>Call Us: (123) 456-7890</Badge>
        </a>
        <Box display="flex" justifyContent="space-between">
          <a href="https://www.linkedin.com/">
            <Badge colorScheme="blue" mr={4}>LinkedIn</Badge>
          </a>
          <a href="https://www.instagram.com/">
            <Badge colorScheme="pink">Instagram</Badge>
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;

