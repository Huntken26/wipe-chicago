import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';

//Navbar using components from chakra UI. First time using this library so just seeing if it's better than react-bootstrap

function Navbar() {
  return (
    <Box bg="gray.100" py="3">
      <Flex maxW="1200px" mx="auto" px="4">
        <Link href="/" fontSize="xl" fontWeight="bold">Wipe Chicago LLC</Link>
        <Spacer />
        <Link href="/services" mr="4">Services</Link>
        <Link href="/contact" mr="4">Contact Us</Link>
        <Link href="/map">Map</Link>
      </Flex>
    </Box>
  );
}

export default Navbar;